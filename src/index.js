const tasks = require('jfrog-pipelines-tasks');

async function main() {
  const filePath = tasks.getInput('path-to-nodejs-file');
  const script = tasks.getInput('nodejs-script');

  try {
    if (!isEmpty(filePath)) {
      await tasks.execute(filePath);
    }
    else if (!isEmpty(script)) {
      await tasks.execute(script);
    }
    else {
      throw "No files/script to execute";
    }

  } catch (error) {
    logger.error('No files/script to execute',error);
  }
    
}

(
  async () => {
    await main();
  }
)();
