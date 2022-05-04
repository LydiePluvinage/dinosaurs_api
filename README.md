# Introduction

Who doesn't love dinosaurs ?
Definitly not me !

## Authorization

No need for API Token, this is a free, open source API. Enjoy !

## Responses

Here are the endpoints of this API :

```http
GET /v1/dinos

query filters :
name : name of the dino should contain this word
size : dino's size will be <= this value
weight : dino's weight will be <= this value
diet : will display only dinos matching this diet (see route diets for more info)
era : will display only dinos matching this era (see route eras for more info)
location : will display only dinos matching this location (see route locations for more info)
```

```http
GET /v1/dinos/{id}
```

```http
GET /v1/dinos/random
```

```http
GET /v1/eras
```

```http
GET /v1/locations
```

```http
GET /v1/diets
```

## Status Codes

Dinosaurs-API returns the following status codes in its API:

| Status Code | Description             |
| :---------- | :---------------------- |
| 200         | `OK`                    |
| 201         | `CREATED`               |
| 404         | `NOT FOUND`             |
| 500         | `INTERNAL SERVER ERROR` |
