# Typescript-Node-Jest-Docker Boilerplate

## Docker
### Uruchomienie środowiska
1. Utworzyć plik `docker/.env` zawierający zmienne środowiskowe potrzebne do uruchomienia (przekopiowując plik 
.env.template i uzupełniając danymi)
2. Utworzyć sieć dokerową: `docker network create app_net`
3. W katalogu głównym wydać polecenie `docker-compose up`.

### Kompilacja
1. Upewnij się że katalog build/dist ma uprawnienia do zapisu.
