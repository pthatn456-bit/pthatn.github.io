FROM python:3.11-slim


WORKDIR /app



RUN apt-get update && apt-get install -y \

    ffmpeg \

    libsndfile1 \

    curl \

    && rm -rf /var/lib/apt/lists/*



COPY api/requirements.txt .



RUN pip install --no-cache-dir -r requirements.txt



COPY api /app



EXPOSE 8000



CMD [

"uvicorn",

"main:app",

"--host",

"0.0.0.0",

"--port",

"8000"

]