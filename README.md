# Vvvectorrr Fortigate log parser and normalizer
<!-- ![image info](./assets/vvveeecctooorrrr.png) -->
This repository contains a Docker setup for running Vector with Elasticsearch. Vector uses the configuration provided in `vector.toml`.\
This will normalize foritigate logs into more usefull information and store them in elaticseach

<img src="./assets/vvveeecctooorrrr.png" alt="VectorAIGenerated" width="400"/>

## Prerequisites

- Docker: [Get Docker](https://docs.docker.com/get-docker/)
- Docker Compose: Included with Docker (Pi might require to install compose as well `sudo apt-get install docker-compose`)

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/parowdude/vvvectorrr.git
   cd vvvectorrr
2. Add your data file called `input.log` in the `data` directory

3. Start docker (This will start elasticseach as well as the vector instance)
    ```bash
      sudo docker-compose up
4. Query your data from this endpoint (date time is in format yearMonth format e.g. `202409`)
- Postman : URL `http://{serverIPHere}:9200/siem-auth-firewall-fortigate-fortigate-{datetimehere}/_search`
- curl : `curl -XGET 'http://{serverIPHere}:9200/siem-auth-firewall-fortigate-fortigate-{datetimehere}/_search'`
- (The parsed data is also available in output.log)

## Extras
- There is a `dataChecker.js` that takes an `input` and `original` object variables that can be modified if you want to compare data parsers.\
This will give output such as `value mismatch: rcvdbyte: 59045 -> 20`  or `Key missing from output object: url`
- The docker and vector configs was tested on a Pi Raspberry Pi 4 Model B Rev 1.4 8GB
- Kibana has been commented out in the `docker-compose.yml` to save setup time. This can be re-enabled if visualisation is needed etc.\
<sub><sup>PS. Naming convention and image inspiration from https://www.youtube.com/watch?v=-6DPo7fXV6I</sup></sub>