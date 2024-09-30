# Vector and Elasticsearch Docker Setup
<!-- ![image info](./assets/vvveeecctooorrrr.png) -->
This repository contains a Docker setup for running Vector with Elasticsearch. Vector uses the configuration provided in `vector.toml`.

<img src="./assets/vvveeecctooorrrr.png" alt="VectorAIGenerated" width="400"/>

## Prerequisites

- Docker: [Get Docker](https://docs.docker.com/get-docker/)
- Docker Compose: Included with Docker (Pi might require to install compose as well `sudo apt-get install docker-compose`)

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/parowdude/vvvectorrr.git
   cd vvvectorrr
2. Add your data file in the `data` directory called `input.log`

3. Start docker (This will start elasticseach as well as the vector instance)
    ```bash
      docker-compose up
4. Query your data from this endpoint
- Postman : URL `http://{serverIPHere}:9200/siem-auth-firewall-fortigate-fortigate-{datetimehere}/_search`
- curl : `curl -XGET 'http://{serverIPHere}:9200/siem-auth-firewall-fortigate-fortigate-{datetimehere}/_search'`
- (The parsed data is also available in output.log)


<sub><sup>PS. Naming convention and image inspiration from https://www.youtube.com/watch?v=-6DPo7fXV6I</sup></sub>