---
title: "Building Scalable Microservices with Node.js and Docker"
date: "2024-01-15"
excerpt: "A comprehensive guide to architecting microservices that can handle millions of requests while maintaining code quality and deployment simplicity."
author: "Aayush Pathak"
category: "Backend"
tags: ["Node.js", "Docker", "Microservices", "Architecture"]
featured: true
readTime: 12
image: "/blog/images/microservices-architecture.jpg"
slug: "scalable-microservices-nodejs-docker"
---

# Building Scalable Microservices with Node.js and Docker

## Introduction

Microservices architecture has become the gold standard for building scalable, maintainable applications that can handle millions of users. In this comprehensive guide, we'll explore how to design, implement, and deploy microservices using Node.js and Docker, focusing on real-world scalability challenges and solutions.

## Why Microservices?

Traditional monolithic applications face several challenges as they grow:

- **Scaling bottlenecks**: The entire application must be scaled, even if only one component needs more resources
- **Technology lock-in**: The entire application is tied to a single technology stack
- **Deployment risks**: A bug in one feature can bring down the entire application
- **Team coordination**: Large teams working on the same codebase leads to conflicts and slower development

Microservices solve these problems by breaking applications into smaller, independent services that can be developed, deployed, and scaled independently.

## Architecture Principles

### 1. Single Responsibility Principle

Each microservice should have one clear business purpose. For example:

```javascript
// User Service - handles user management
const userService = {
  createUser: async (userData) => { /* ... */ },
  getUserById: async (userId) => { /* ... */ },
  updateUser: async (userId, updates) => { /* ... */ },
  deleteUser: async (userId) => { /* ... */ }
};

// Order Service - handles order processing
const orderService = {
  createOrder: async (orderData) => { /* ... */ },
  getOrderById: async (orderId) => { /* ... */ },
  updateOrderStatus: async (orderId, status) => { /* ... */ },
  cancelOrder: async (orderId) => { /* ... */ }
};
```

### 2. Database Per Service

Each microservice should own its data and database schema:

```javascript
// User Service Database Schema
const userSchema = {
  id: 'UUID',
  email: 'STRING',
  password: 'HASHED_STRING',
  profile: 'JSON',
  createdAt: 'TIMESTAMP',
  updatedAt: 'TIMESTAMP'
};

// Order Service Database Schema
const orderSchema = {
  id: 'UUID',
  userId: 'UUID', // Reference to user, but no foreign key constraint
  items: 'JSON',
  status: 'ENUM',
  totalAmount: 'DECIMAL',
  createdAt: 'TIMESTAMP'
};
```

### 3. API-First Communication

Services communicate exclusively through well-defined APIs:

```javascript
// Inter-service communication example
class OrderService {
  async createOrder(orderData) {
    // Validate user exists by calling User Service API
    const user = await this.userServiceClient.getUserById(orderData.userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Create order
    const order = await this.orderRepository.create(orderData);
    
    // Publish order created event
    await this.eventBus.publish('order.created', {
      orderId: order.id,
      userId: order.userId,
      amount: order.totalAmount
    });

    return order;
  }
}
```

## Implementation with Node.js

### Service Structure

Here's a recommended structure for a Node.js microservice:

```
user-service/
├── src/
│   ├── controllers/
│   │   └── userController.js
│   ├── services/
│   │   └── userService.js
│   ├── repositories/
│   │   └── userRepository.js
│   ├── models/
│   │   └── user.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── validation.js
│   │   └── errorHandler.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── config/
│   │   ├── database.js
│   │   └── environment.js
│   └── app.js
├── tests/
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

### Example Service Implementation

```javascript
// src/app.js
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

// API routes
app.use('/api/v1/users', userRoutes);

// Error handling
app.use(errorHandler);

module.exports = app;
```

```javascript
// src/controllers/userController.js
const userService = require('../services/userService');
const { validationResult } = require('express-validator');

class UserController {
  async createUser(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const user = await userService.createUser(req.body);
      res.status(201).json({
        success: true,
        data: user,
        message: 'User created successfully'
      });
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await userService.getUserById(id);
      
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      res.json({
        success: true,
        data: user
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
```

## Docker Configuration

### Dockerfile

```dockerfile
# Multi-stage build for production optimization
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

FROM node:18-alpine AS runtime

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodeuser -u 1001

WORKDIR /app

# Copy dependencies from builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --chown=nodeuser:nodejs . .

# Switch to non-root user
USER nodeuser

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node healthcheck.js

# Start the application
CMD ["node", "src/server.js"]
```

### Docker Compose for Development

```yaml
# docker-compose.yml
version: '3.8'

services:
  user-service:
    build: .
    ports:
      - "3001:3000"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgresql://user:password@postgres:5432/userdb
      - REDIS_URL=redis://redis:6379
    depends_on:
      - postgres
      - redis
    volumes:
      - .:/app
      - /app/node_modules
    command: npm run dev

  order-service:
    build: ../order-service
    ports:
      - "3002:3000"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgresql://user:password@postgres:5432/orderdb
      - USER_SERVICE_URL=http://user-service:3000
    depends_on:
      - postgres
      - user-service

  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=microservices
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - user-service
      - order-service

volumes:
  postgres_data:
  redis_data:
```

## Scaling Strategies

### Horizontal Scaling

```yaml
# docker-compose.prod.yml
version: '3.8'

services:
  user-service:
    build: .
    deploy:
      replicas: 3
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 256M
      restart_policy:
        condition: on-failure
        delay: 5s
        max_attempts: 3
    environment:
      - NODE_ENV=production
      - DATABASE_URL=${DATABASE_URL}
      - REDIS_URL=${REDIS_URL}
```

### Load Balancing with Nginx

```nginx
# nginx.conf
upstream user_service {
    least_conn;
    server user-service-1:3000;
    server user-service-2:3000;
    server user-service-3:3000;
}

upstream order_service {
    least_conn;
    server order-service-1:3000;
    server order-service-2:3000;
}

server {
    listen 80;
    
    location /api/v1/users {
        proxy_pass http://user_service;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        
        # Health check
        proxy_next_upstream error timeout invalid_header http_500 http_502 http_503;
        proxy_connect_timeout 5s;
        proxy_send_timeout 10s;
        proxy_read_timeout 10s;
    }
    
    location /api/v1/orders {
        proxy_pass http://order_service;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

## Monitoring and Observability

### Application Metrics

```javascript
// src/middleware/metrics.js
const prometheus = require('prom-client');

// Create metrics
const httpRequestDuration = new prometheus.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code']
});

const httpRequestTotal = new prometheus.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code']
});

const activeConnections = new prometheus.Gauge({
  name: 'active_connections',
  help: 'Number of active connections'
});

// Middleware to collect metrics
const metricsMiddleware = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    const route = req.route ? req.route.path : req.path;
    
    httpRequestDuration
      .labels(req.method, route, res.statusCode)
      .observe(duration);
    
    httpRequestTotal
      .labels(req.method, route, res.statusCode)
      .inc();
  });
  
  next();
};

module.exports = { metricsMiddleware, prometheus };
```

### Structured Logging

```javascript
// src/utils/logger.js
const winston = require('winston');

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: {
    service: process.env.SERVICE_NAME || 'microservice',
    version: process.env.SERVICE_VERSION || '1.0.0'
  },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
});

module.exports = logger;
```

## Best Practices

### 1. Circuit Breaker Pattern

```javascript
// src/utils/circuitBreaker.js
class CircuitBreaker {
  constructor(request, options = {}) {
    this.request = request;
    this.state = 'CLOSED';
    this.failureCount = 0;
    this.successCount = 0;
    this.nextAttempt = Date.now();
    
    this.failureThreshold = options.failureThreshold || 5;
    this.successThreshold = options.successThreshold || 2;
    this.timeout = options.timeout || 60000;
  }

  async call(...args) {
    if (this.state === 'OPEN') {
      if (this.nextAttempt <= Date.now()) {
        this.state = 'HALF_OPEN';
      } else {
        throw new Error('Circuit breaker is OPEN');
      }
    }

    try {
      const result = await this.request(...args);
      return this.onSuccess(result);
    } catch (error) {
      return this.onFailure(error);
    }
  }

  onSuccess(result) {
    this.failureCount = 0;
    
    if (this.state === 'HALF_OPEN') {
      this.successCount++;
      if (this.successCount >= this.successThreshold) {
        this.state = 'CLOSED';
        this.successCount = 0;
      }
    }
    
    return result;
  }

  onFailure(error) {
    this.failureCount++;
    
    if (this.failureCount >= this.failureThreshold) {
      this.state = 'OPEN';
      this.nextAttempt = Date.now() + this.timeout;
    }
    
    throw error;
  }
}

module.exports = CircuitBreaker;
```

### 2. Graceful Shutdown

```javascript
// src/server.js
const app = require('./app');
const logger = require('./utils/logger');

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

function gracefulShutdown(signal) {
  logger.info(`Received ${signal}. Starting graceful shutdown...`);
  
  server.close((err) => {
    if (err) {
      logger.error('Error during server shutdown:', err);
      process.exit(1);
    }
    
    logger.info('Server closed successfully');
    process.exit(0);
  });
  
  // Force shutdown after 30 seconds
  setTimeout(() => {
    logger.error('Forced shutdown after timeout');
    process.exit(1);
  }, 30000);
}
```

## Deployment to Production

### Kubernetes Deployment

```yaml
# k8s/user-service-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
  labels:
    app: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
      - name: user-service
        image: your-registry/user-service:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: database-secret
              key: url
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5

---
apiVersion: v1
kind: Service
metadata:
  name: user-service
spec:
  selector:
    app: user-service
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: ClusterIP
```

## Conclusion

Building scalable microservices with Node.js and Docker requires careful attention to architecture, implementation, and operational concerns. Key takeaways:

1. **Design for failure**: Implement circuit breakers, retries, and graceful degradation
2. **Monitor everything**: Use structured logging, metrics, and distributed tracing
3. **Automate deployment**: Use CI/CD pipelines and infrastructure as code
4. **Plan for scale**: Design services to be stateless and horizontally scalable
5. **Security first**: Implement authentication, authorization, and secure communication

By following these patterns and practices, you can build microservices that scale to handle millions of requests while maintaining reliability and performance.

The complete source code for this example is available on [GitHub](https://github.com/aayushpathak/scalable-microservices-example).