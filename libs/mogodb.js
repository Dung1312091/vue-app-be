import mongoose from 'mongoose';
import Log from './log';
import  MESSAGE  from '../constains/messages';
class MongoDB {
  constructor(host, port, name) {
    //set Promise for mongoose
    this.host = host;
    this.port = port;
    this.name = name;
    this.connectionString = `mongodb://${host}:${port}/${name}`;
  }
  connectSuccess() {
    Log.success(`${this.connectionString} : ${MESSAGE.CONNECT_DB_SUCCESS}.`);
  }
  connectError(error) {
    Log.error(`${this.connectionString} : ${MESSAGE.CONNECT_DB_ERROR} : ${error.message} `);

    //reconnect if have cant not connect to db or some thing wrong
    setTimeout(() => {
      Log.warn(`${MESSAGE.RECONNECT_DB} in 10 ms`);
      this.connect();
    }, 10);
  }
  connect() {
    try {
      mongoose.connect(this.connectionString, option).then(() => this.connectSuccess(), error => this.connectError(error));
    } catch (error) {
      Log.error(error.message);
    }
  }
}

export default MongoDB;

const option = {
  useNewUrlParser : true,
  autoIndex       : false ,
  autoReconnect   : true,
  useUnifiedTopology: true,
  poolSize        : 10, // Maintain up to 10 socket connections
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS : 45000, // Close sockets after 45 seconds of inactivity
  family          : 4 // Use IPv4, skip trying IPv6
};
