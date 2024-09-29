# Vector and Elasticsearch Docker Setup

This repository contains a Docker setup for running Vector with Elasticsearch. Vector uses the configuration provided in `vector.toml`.

## Prerequisites

- Docker: [Get Docker](https://docs.docker.com/get-docker/)
- Docker Compose: Included with Docker (Pi might require to install compose as well `sudo apt-get install docker-compose`)

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/parowdude/vvvectorrr.git
   cd vvvectorrr
   docker-compose up

2. add your data file in the data directory called `input.log`

3. Query your data from this endpoint
- Postman : URL `http://{serverIPHere}:9200/transform-test/_search`
- curl : `curl -XGET 'http://{serverIPHere}:9200/transform-test/_search'`