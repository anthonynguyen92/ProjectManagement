FROM node:12.18-alpine
ENV NODE_ENV development

WORKDIR /app
EXPOSE 61001

# COPY ["applications/WebAdmin/", "./"]
COPY . ./
#WORKDIR "/app/WebAdmin"
RUN npm install
ENV PATH="./node_modules/.bin:$PATH"
CMD npm start
