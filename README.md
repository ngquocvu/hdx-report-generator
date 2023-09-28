# HDX Report Generator

## Description

I developed an automated tool that simplifies the process of obtaining JSON data regarding country boundaries from the HDX service. Additionally, it generates a report containing information such as API call status, error codes, and loading times.

API Endpoint: `https://apps.itos.uga.edu/CODV2API/api/v1/themes/cod-ab/locations/{countryCode}/versions/current/geoJson/0`

Source code: `https://github.com/Nguyen-Quoc-Vu/hdx-report-generator`

## Usage

### Installing

1. Clone Repository: `git clone https://github.com/Nguyen-Quoc-Vu/hdx-report-generator & cd hdx-report-generator`
2. Check out the "main" branch. `git checkout main`
3. Install dependencies: `npm install`
4. Start to generate the report: `node index.js`
5. Open the new-generated file in the same source code folder `hdx_country_boundary_report.json`

### Generated Report For African Country (Last updated: 27.09.2023)

| Country                          | Code3 | Is success? | Time(s) | Error message                       |
| -------------------------------- | ----- | ----------- | ------- | ----------------------------------- |
| Algeria                          | DZA   | true        | 5.742   |                                     |
| Angola                           | AGO   | true        | 14.108  |                                     |
| Benin                            | BEN   | true        | 4.498   |                                     |
| Botswana                         | BWA   | false       | 0       | Request failed with status code 404 |
| Burkina Faso                     | BFA   | true        | 6.92    |                                     |
| Burundi                          | BDI   | true        | 5.369   |                                     |
| Cameroon                         | CMR   | true        | 8.124   |                                     |
| Cape Verde                       | CPV   | false       | 0       | Request failed with status code 404 |
| Central African Republic         | VAF   | false       | 0       | Request failed with status code 404 |
| Chad                             | CAF   | true        | 4.83    |                                     |
| Comoros                          | TCD   | true        | 11.721  |                                     |
| Congo                            | COM   | true        | 5.804   |                                     |
| Democratic Republic of the Congo | COG   | true        | 5.639   |                                     |
| Côte d'Ivoire                    | COD   | true        | 5.837   |                                     |
| Djibouti                         | CIV   | true        | 5.371   |                                     |
| Egypt                            | DJI   | false       | 0       | Request failed with status code 404 |
| Equatorial Guinea                | EGY   | true        | 14.727  |                                     |
| Eritrea                          | GNQ   | true        | 5.282   |                                     |
| Ethiopia                         | ERI   | true        | 7.348   |                                     |
| Gabon                            | ETH   | true        | 4.803   |                                     |
| Gambia                           | GAB   | false       | 0       | Request failed with status code 404 |
| Ghana                            | GMB   | true        | 5.016   |                                     |
| Guinea                           | GIN   | true        | 2.981   |                                     |
| Guinea-Bissau                    | GNB   | true        | 4.81    |                                     |
| Kenya                            | KEN   | true        | 5.621   |                                     |
| Lesotho                          | LSO   | false       | 0       | Request failed with status code 404 |
| Liberia                          | LBR   | true        | 10.774  |                                     |
| Libya                            | LBY   | true        | 10.791  |                                     |
| Madagascar                       | MDG   | false       | 0       | Request failed with status code 404 |
| Mali                             | MLI   | true        | 11.87   |                                     |
| Malawi                           | MWI   | true        | 19.715  |                                     |
| Mauritania                       | MRT   | true        | 9.656   |                                     |
| Mauritius                        | MUS   | false       | 0       | Request failed with status code 404 |
| Mayotte                          | MYT   | false       | 0       | Request failed with status code 404 |
| Morocco                          | MAR   | true        | 12.985  |                                     |
| Mozambique                       | MOZ   | true        | 14.494  |                                     |
| Namibia                          | NAM   | true        | 13.816  |                                     |
| Niger                            | NER   | false       | 0       | Request failed with status code 500 |
| Nigeria                          | NGA   | true        | 9.876   |                                     |
| Réunion                          | REU   | false       | 0       | Request failed with status code 404 |
| Rwanda                           | RWA   | false       | 0       | Request failed with status code 404 |
| São Tomé and Príncipe            | STP   | false       | 0       | Request failed with status code 404 |
| Senegal                          | SEN   | true        | 11.728  |                                     |
| Seychelles                       | SYC   | false       | 0       | Request failed with status code 404 |
| Sierra Leone                     | SLE   | true        | 11.587  |                                     |
| Somalia                          | SOM   | true        | 10.321  |                                     |
| South Africa                     | ZAF   | true        | 18.633  |                                     |
| South Sudan                      | SSD   | true        | 9.92    |                                     |
| Sudan                            | SDN   | true        | 12.397  |                                     |
| Swaziland                        | SWZ   | true        | 8.871   |                                     |
| Tanzania                         | TZA   | false       | 0       | Request failed with status code 404 |
| Togo                             | TGO   | true        | 8.863   |                                     |
| Tunisia                          | TUN   | true        | 6.105   |                                     |
| Uganda                           | UGA   | true        | 10.499  |                                     |
| Western Sahara                   | ESH   | true        | 3.167   |                                     |
| Zambia                           | ZMB   | true        | 3.384   |                                     |
| Zimbabwe                         | ZWE   | true        | 4.172   |                                     |
