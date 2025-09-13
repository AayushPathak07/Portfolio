import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  contentHtml?: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

export interface ProjectPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  contentHtml?: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  date: string;
  category: string;
  featured: boolean;
}

// Mock data for demonstration - In a real implementation, these would read from files
const mockBlogPosts: BlogPost[] = [
  {
    slug: 'scalable-microservices-nodejs-docker',
    title: 'Building Scalable Microservices with Node.js and Docker',
    excerpt: 'A comprehensive guide to architecting microservices that can handle millions of requests while maintaining code quality and deployment simplicity.',
    content: `# Building Scalable Microservices with Node.js and Docker

## Introduction

Microservices architecture has become the gold standard for building scalable, maintainable applications...

## Architecture Overview

When designing a microservices system, consider these key principles:

1. **Single Responsibility**: Each service should have one clear purpose
2. **Loose Coupling**: Services should be independent and communicate via APIs
3. **High Cohesion**: Related functionality should be grouped together

## Implementation Details

### Service Structure

\`\`\`javascript
const express = require('express');
const app = express();

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Business logic endpoints
app.get('/api/users', getUsersHandler);
app.post('/api/users', createUserHandler);

module.exports = app;
\`\`\`

## Conclusion

Building scalable microservices requires careful planning and adherence to best practices...`,
    author: 'Aayush Pathak',
    date: '2024-01-15',
    readTime: 12,
    category: 'Backend',
    tags: ['Node.js', 'Docker', 'Microservices', 'Architecture'],
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: true
  },
  {
    slug: 'database-optimization-techniques',
    title: 'Database Optimization: From Slow Queries to Lightning Fast',
    excerpt: 'Learn advanced database optimization techniques including indexing strategies, query optimization, and connection pooling for high-performance applications.',
    content: `# Database Optimization: From Slow Queries to Lightning Fast

## Introduction

Database performance is often the bottleneck in web applications...

## Indexing Strategies

### B-Tree Indexes
\`\`\`sql
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_created_at ON orders(created_at);
\`\`\`

## Query Optimization

### Analyzing Query Performance
\`\`\`sql
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'user@example.com';
\`\`\`

## Conclusion

Proper database optimization can improve performance by 10-100x...`,
    author: 'Aayush Pathak',
    date: '2024-01-10',
    readTime: 15,
    category: 'Database',
    tags: ['PostgreSQL', 'Performance', 'Optimization', 'SQL'],
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: true
  },
  {
    slug: 'devops-pipeline-github-actions-aws',
    title: 'DevOps Pipeline: CI/CD with GitHub Actions and AWS',
    excerpt: 'Step-by-step guide to setting up automated deployment pipelines using GitHub Actions, Docker, and AWS services for seamless code delivery.',
    content: `# DevOps Pipeline: CI/CD with GitHub Actions and AWS

## Introduction

Automated deployment pipelines are essential for modern software development...

## GitHub Actions Setup

\`\`\`yaml
name: Deploy to AWS
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to AWS
        run: |
          # Deployment commands here
\`\`\`

## Conclusion

Automated pipelines reduce deployment time and errors significantly...`,
    author: 'Aayush Pathak',
    date: '2024-01-05',
    readTime: 10,
    category: 'DevOps',
    tags: ['GitHub Actions', 'AWS', 'CI/CD', 'Docker'],
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false
  }
];

const mockProjects: ProjectPost[] = [
  {
    slug: 'distributed-task-queue-system',
    title: 'Distributed Task Queue System',
    excerpt: 'High-performance task queue system built with Redis and Node.js, capable of processing 100k+ jobs per minute with automatic retry logic and dead letter queues.',
    content: `# Distributed Task Queue System

## Overview

This project implements a high-performance distributed task queue system designed to handle massive workloads with reliability and scalability.

## Architecture

The system consists of several key components:

### Queue Manager
- **Redis-based storage**: Leverages Redis for fast, persistent job storage
- **Priority queues**: Support for multiple priority levels
- **Dead letter queues**: Failed jobs are moved to DLQ for analysis

### Worker Processes
- **Horizontal scaling**: Add workers across multiple machines
- **Graceful shutdown**: Workers complete current jobs before stopping
- **Health monitoring**: Built-in health checks and metrics

## Key Features

### Performance
- **100k+ jobs/minute**: Tested throughput under load
- **Sub-second latency**: Jobs processed within milliseconds
- **Memory efficient**: Optimized memory usage patterns

### Reliability
- **Automatic retries**: Configurable retry logic with exponential backoff
- **Job persistence**: Jobs survive system restarts
- **Monitoring**: Comprehensive metrics and alerting

## Implementation Details

\`\`\`javascript
const TaskQueue = require('./lib/TaskQueue');

const queue = new TaskQueue({
  redis: { host: 'localhost', port: 6379 },
  concurrency: 10,
  retries: 3
});

// Add a job
await queue.add('send-email', {
  to: 'user@example.com',
  subject: 'Welcome!',
  template: 'welcome'
});

// Process jobs
queue.process('send-email', async (job) => {
  const { to, subject, template } = job.data;
  await emailService.send({ to, subject, template });
});
\`\`\`

## Performance Benchmarks

- **Throughput**: 120,000 jobs/minute on 4-core machine
- **Latency**: P99 < 50ms job processing time
- **Memory**: <100MB for 1M queued jobs
- **Reliability**: 99.99% job completion rate

## Deployment

The system is containerized and can be deployed using Docker Compose or Kubernetes:

\`\`\`yaml
version: '3.8'
services:
  queue-worker:
    image: task-queue:latest
    environment:
      - REDIS_URL=redis://redis:6379
      - WORKER_CONCURRENCY=10
    depends_on:
      - redis
  
  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data
\`\`\`

## Monitoring

Built-in Prometheus metrics provide visibility into:
- Job processing rates
- Queue depths
- Error rates
- Worker health

## Future Enhancements

- **Multi-tenant support**: Isolated queues per tenant
- **Advanced scheduling**: Cron-like job scheduling
- **Web UI**: Management dashboard for queue monitoring`,
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Node.js', 'Redis', 'Docker', 'PostgreSQL', 'TypeScript'],
    githubUrl: 'https://github.com/aayushpathak/distributed-task-queue',
    liveUrl: 'https://task-queue-demo.aayushpathak.com',
    date: '2024',
    category: 'Backend Systems',
    featured: true
  },
  {
    slug: 'microservices-api-gateway',
    title: 'Microservices API Gateway',
    excerpt: 'Scalable API gateway with rate limiting, authentication, load balancing, and service discovery. Handles 50k+ requests per second with sub-100ms latency.',
    content: `# Microservices API Gateway

## Project Overview

A high-performance API gateway designed to handle massive traffic loads while providing essential features like authentication, rate limiting, and service discovery.

## Architecture

### Core Components

1. **Request Router**: Intelligent routing based on URL patterns
2. **Load Balancer**: Distributes traffic across service instances
3. **Auth Service**: JWT-based authentication and authorization
4. **Rate Limiter**: Token bucket algorithm for traffic control
5. **Service Discovery**: Automatic service registration and health checks

## Performance Characteristics

- **Throughput**: 50,000+ requests/second
- **Latency**: Sub-100ms response times
- **Availability**: 99.99% uptime SLA
- **Scalability**: Horizontal scaling across multiple nodes

## Key Features

### Authentication & Authorization
\`\`\`python
@app.middleware("http")
async def auth_middleware(request: Request, call_next):
    if request.url.path.startswith("/api/"):
        token = request.headers.get("Authorization")
        if not token or not validate_jwt(token):
            return JSONResponse(
                status_code=401,
                content={"error": "Unauthorized"}
            )
    
    response = await call_next(request)
    return response
\`\`\`

### Rate Limiting
- **Per-user limits**: Configurable rate limits per API key
- **Global limits**: System-wide traffic throttling
- **Burst handling**: Token bucket algorithm allows traffic bursts

### Load Balancing
- **Round-robin**: Default load balancing strategy
- **Least connections**: Route to least busy service
- **Health-aware**: Automatic failover for unhealthy services

## Service Discovery

The gateway automatically discovers and registers services:

\`\`\`python
class ServiceRegistry:
    def __init__(self):
        self.services = {}
        self.health_checker = HealthChecker()
    
    async def register_service(self, name: str, instances: List[str]):
        self.services[name] = instances
        await self.health_checker.start_monitoring(name, instances)
    
    async def get_healthy_instance(self, service_name: str) -> str:
        healthy_instances = await self.health_checker.get_healthy(service_name)
        return self.load_balancer.select(healthy_instances)
\`\`\`

## Monitoring & Observability

### Metrics Collection
- Request/response metrics
- Service health status
- Performance benchmarks
- Error rates and patterns

### Logging
Structured logging with correlation IDs for request tracing:

\`\`\`python
logger.info(
    "Request processed",
    extra={
        "correlation_id": request.headers.get("X-Correlation-ID"),
        "service": target_service,
        "duration_ms": duration,
        "status_code": response.status_code
    }
)
\`\`\`

## Deployment

### Kubernetes Deployment
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-gateway
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api-gateway
  template:
    metadata:
      labels:
        app: api-gateway
    spec:
      containers:
      - name: gateway
        image: api-gateway:latest
        ports:
        - containerPort: 8000
        env:
        - name: REDIS_URL
          value: "redis://redis:6379"
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
\`\`\`

## Security Features

- **JWT Authentication**: Stateless token-based auth
- **Rate Limiting**: DDoS protection
- **CORS Handling**: Cross-origin request management
- **Request Validation**: Input sanitization and validation

## Performance Optimizations

1. **Connection Pooling**: Reuse HTTP connections to backend services
2. **Caching**: Redis-based response caching
3. **Async Processing**: Non-blocking I/O operations
4. **Circuit Breaker**: Fail-fast for unhealthy services

## Future Roadmap

- **GraphQL Support**: Native GraphQL gateway capabilities
- **WebSocket Proxying**: Real-time connection handling
- **Advanced Analytics**: ML-based traffic analysis
- **Multi-region Deployment**: Global load balancing`,
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Python', 'FastAPI', 'Kubernetes', 'AWS', 'MongoDB'],
    githubUrl: 'https://github.com/aayushpathak/api-gateway',
    liveUrl: 'https://api-gateway.aayushpathak.com',
    date: '2024',
    category: 'Microservices',
    featured: true
  },
  {
    slug: 'real-time-analytics-pipeline',
    title: 'Real-time Analytics Pipeline',
    excerpt: 'Stream processing pipeline for real-time analytics using Apache Kafka, processing millions of events per day with sub-second latency and automatic scaling.',
    content: `# Real-time Analytics Pipeline

## Project Overview

A comprehensive real-time analytics pipeline built to process millions of events per day with sub-second latency, providing instant insights for business intelligence and monitoring.

## System Architecture

### Data Ingestion Layer
- **Apache Kafka**: High-throughput message streaming
- **Schema Registry**: Avro schema management
- **Kafka Connect**: Integration with external systems

### Stream Processing
- **Apache Kafka Streams**: Real-time stream processing
- **Custom Processors**: Business logic implementation
- **State Stores**: Stateful processing capabilities

### Storage Layer
- **ClickHouse**: Columnar database for analytics
- **Redis**: Real-time caching and session storage
- **S3**: Long-term data archival

## Key Capabilities

### High Throughput Processing
- **10M+ events/day**: Sustained high-volume processing
- **Sub-second latency**: Real-time event processing
- **Auto-scaling**: Dynamic resource allocation

### Real-time Analytics
- **Live Dashboards**: Instant metric visualization
- **Alerting**: Threshold-based notifications
- **Anomaly Detection**: ML-based pattern recognition

## Implementation Details

### Event Processing Pipeline

\`\`\`python
from kafka import KafkaConsumer, KafkaProducer
import json
from datetime import datetime

class EventProcessor:
    def __init__(self):
        self.consumer = KafkaConsumer(
            'raw-events',
            bootstrap_servers=['kafka:9092'],
            value_deserializer=lambda x: json.loads(x.decode('utf-8'))
        )
        self.producer = KafkaProducer(
            bootstrap_servers=['kafka:9092'],
            value_serializer=lambda x: json.dumps(x).encode('utf-8')
        )
    
    def process_events(self):
        for message in self.consumer:
            event = message.value
            
            # Enrich event data
            enriched_event = self.enrich_event(event)
            
            # Apply business rules
            processed_event = self.apply_business_rules(enriched_event)
            
            # Send to analytics topic
            self.producer.send('processed-events', processed_event)
    
    def enrich_event(self, event):
        # Add timestamp, user context, geo data, etc.
        event['processed_at'] = datetime.utcnow().isoformat()
        event['user_segment'] = self.get_user_segment(event.get('user_id'))
        return event
    
    def apply_business_rules(self, event):
        # Custom business logic
        if event.get('event_type') == 'purchase':
            event['revenue_impact'] = self.calculate_revenue_impact(event)
        return event
\`\`\`

### Real-time Aggregations

\`\`\`python
class MetricsAggregator:
    def __init__(self):
        self.redis_client = redis.Redis(host='redis', port=6379)
        self.clickhouse_client = clickhouse_connect.get_client(
            host='clickhouse', port=8123
        )
    
    def update_real_time_metrics(self, event):
        # Update Redis counters for real-time metrics
        timestamp = datetime.utcnow().strftime('%Y-%m-%d %H:%M')
        
        # Increment counters
        self.redis_client.incr(f"events:{timestamp}")
        self.redis_client.incr(f"events:{event['event_type']}:{timestamp}")
        
        # Update user activity
        if 'user_id' in event:
            self.redis_client.sadd(f"active_users:{timestamp}", event['user_id'])
        
        # Batch insert to ClickHouse for historical analysis
        self.batch_insert_to_clickhouse(event)
\`\`\`

## Performance Metrics

### Throughput
- **Peak**: 15M events/day
- **Average**: 8M events/day
- **Sustained**: 120 events/second

### Latency
- **P50**: 45ms end-to-end
- **P95**: 150ms end-to-end
- **P99**: 300ms end-to-end

### Reliability
- **Uptime**: 99.95%
- **Data Loss**: <0.01%
- **Processing Accuracy**: 99.99%

## Monitoring & Alerting

### System Metrics
- Kafka lag monitoring
- Processing throughput
- Error rates
- Resource utilization

### Business Metrics
- Revenue tracking
- User engagement
- Conversion rates
- Anomaly detection

### Alerting Rules
\`\`\`yaml
alerts:
  - name: HighKafkaLag
    condition: kafka_consumer_lag > 10000
    severity: critical
    
  - name: LowThroughput
    condition: events_per_second < 50
    severity: warning
    
  - name: HighErrorRate
    condition: error_rate > 0.05
    severity: critical
\`\`\`

## Deployment Architecture

### Docker Compose Setup
\`\`\`yaml
version: '3.8'
services:
  kafka:
    image: confluentinc/cp-kafka:latest
    environment:
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092
    
  clickhouse:
    image: clickhouse/clickhouse-server:latest
    ports:
      - "8123:8123"
    volumes:
      - clickhouse_data:/var/lib/clickhouse
  
  analytics-processor:
    build: .
    environment:
      KAFKA_BROKERS: kafka:9092
      CLICKHOUSE_HOST: clickhouse
      REDIS_URL: redis://redis:6379
    depends_on:
      - kafka
      - clickhouse
      - redis
\`\`\`

## Data Schema

### Event Schema (Avro)
\`\`\`json
{
  "type": "record",
  "name": "Event",
  "fields": [
    {"name": "event_id", "type": "string"},
    {"name": "event_type", "type": "string"},
    {"name": "user_id", "type": ["null", "string"]},
    {"name": "timestamp", "type": "long"},
    {"name": "properties", "type": "map", "values": "string"},
    {"name": "session_id", "type": ["null", "string"]}
  ]
}
\`\`\`

## Scaling Strategies

1. **Horizontal Scaling**: Add more Kafka partitions and consumers
2. **Vertical Scaling**: Increase memory and CPU for processors
3. **Caching**: Redis for frequently accessed data
4. **Batch Processing**: Optimize ClickHouse inserts

## Future Enhancements

- **Machine Learning**: Predictive analytics and recommendations
- **Stream SQL**: SQL interface for stream processing
- **Multi-region**: Global data replication
- **Advanced Visualization**: Custom dashboard framework`,
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Apache Kafka', 'Python', 'ClickHouse', 'Docker', 'Grafana'],
    githubUrl: 'https://github.com/aayushpathak/analytics-pipeline',
    liveUrl: 'https://analytics.aayushpathak.com',
    date: '2023',
    category: 'Data Engineering',
    featured: false
  }
];

// Utility function to convert markdown to HTML
async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// Blog post functions
export async function getAllPosts(): Promise<BlogPost[]> {
  // In a real implementation, this would read from the file system
  // For now, return mock data
  return mockBlogPosts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = mockBlogPosts.find(p => p.slug === slug);
  if (!post) return null;

  // Convert markdown content to HTML
  const contentHtml = await markdownToHtml(post.content);
  
  return {
    ...post,
    contentHtml
  };
}

// Project functions
export async function getAllProjects(): Promise<ProjectPost[]> {
  // In a real implementation, this would read from the file system
  // For now, return mock data
  return mockProjects;
}

export async function getProjectBySlug(slug: string): Promise<ProjectPost | null> {
  const project = mockProjects.find(p => p.slug === slug);
  if (!project) return null;

  // Convert markdown content to HTML
  const contentHtml = await markdownToHtml(project.content);
  
  return {
    ...project,
    contentHtml
  };
}

// Search functions
export async function searchPosts(query: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  const searchTerm = query.toLowerCase();
  
  return posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    post.category.toLowerCase().includes(searchTerm)
  );
}

export async function searchProjects(query: string): Promise<ProjectPost[]> {
  const projects = await getAllProjects();
  const searchTerm = query.toLowerCase();
  
  return projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm) ||
    project.excerpt.toLowerCase().includes(searchTerm) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchTerm)) ||
    project.category.toLowerCase().includes(searchTerm)
  );
}