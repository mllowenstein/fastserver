# fastserver

## build the docker image
`docker build -t fastserver .`

## running the docker container
`docker run =p 3000:3000 fastserver`

## build the docker image without a linux distro/package manager
`docker build -f Dockerfile.distroless -t fastserver-nodistro .`

## running the distroless docker container
`docker run -p 3000:3000 fastserver-nodistro`