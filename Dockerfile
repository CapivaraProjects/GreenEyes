FROM debian:stretch
MAINTAINER CapivaraProjects <wendelhime@hotmail.com>

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y build-essential wget apt-utils libpq-dev gcc vim curl \
    ssh perl-base perl perl-doc 
RUN apt-get install -y gcc g++ libxi6 libglu1-mesa \
    libglu1-mesa-dev linux-headers-amd64 linux-source

RUN apt-get install -y python3 python3-dev python-pip python3-pip
RUN apt-get -y install ipython 
RUN pip3 install --upgrade pip
RUN pip3 install jupyter
RUN pip3 install six numpy wheel 
RUN pip3 install tensorflow 

WORKDIR /root
EXPOSE 8888
#CMD ["ipython", "notebook", "--allow-root", "--ip=127.0.0.1", "--port=8888"]
CMD ["jupyter", "notebook", "--ip=*", "--allow-root"]
