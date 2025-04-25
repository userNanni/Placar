FROM alpine:latest

RUN apk add --no-cache ca-certificates

WORKDIR /pb

COPY pocketbase /pb/pocketbase
COPY pb_data /pb/pb_data

EXPOSE 8080

ENTRYPOINT ["./pocketbase", "serve", "--http=0.0.0.0:8080"]
