"# Cypress-INIT" 
docker run -it `
  -v C:\Users\olamide.john\Documents\CypressINIT:/e2e `
  -w /e2e `
  cypress/included:latest `
  cypress run


For WINDOWS --> Execute all the commands mentioned below in the command prompt

To check if Docker container is running use command docker ps -a

Command to execute test - docker run -it -v "%cd%":/e2e -w /e2e --entrypoint=cypress cypress/included:latest run

Instead of cypress/included:latest should use the cypress version installed in your machine. For example if the cypress version = 12.12.0 --> Then the command should contain cypress/included:12.12.0
