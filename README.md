
# docker ssi

Build with:
```
docker build -t %IMAGE-NAME% .

Example:
docker build -t test-image .
```

Run with:
```
docker run --rm --name %CONTAINER-NAME% -p 5001:80 -v ${PWD}/www:/var/www/html %IMAGE-NAME%

Example:
docker run --rm --name test-container -p 5001:80 -v ${PWD}/www:/var/www/html test-image
```

```
http://localhost:5001/
```