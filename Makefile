build-nodejs:
	@ docker build -t nodejs-test nodejs/

apply-nodejs:
	@  kubectl apply -f nodejs/k8s/

watch-nodejs:
	@ kubectl get hpa --watch

load-nodejs:
	@ kubectl run -i --tty load-generator2 --rm --image=busybox:1.28 --restart=Never -- /bin/sh -c "while sleep 0.01; do wget -q -O- http://nodejs-app:3001; done"