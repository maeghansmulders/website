docker build -t olivierbeaulieu/maeghan-website .
docker push olivierbeaulieu/maeghan-website

gcloud container clusters get-credentials cluster-1 --zone us-central1-a --project hatchery-185118

kubectl rolling-update maeghan-website --image=olivierbeaulieu/maeghan-website:latest --image-pull-policy Always