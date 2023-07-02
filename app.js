const yargs = require("yargs");
const db = require("./db.js");
const { argv } = require("yargs");

//add
yargs.command({

    command: "add",
    describe: "To add",
    builder:{
        name:{
            describe:"Name",
            demandOption:true,
            type: "string"
        },
        address:{
            describe:"Address",
            demandOption:true,
            type: "string"
        },
        contact:{
            describe:"Contact No",
            demandOption:true,
            type: "string"
        },
        date:{
            describe:"Visit Dare",
            demandOption:true,
            type: "string"
        }
    },
    handler(argv){
        db.add(argv.name, argv.address, argv.contact, argv.date);
    }

});

//update
yargs.command({

    command: "update",
    describe: "To add",
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type: "number"
        },
        name:{
            describe:"Name",
            type: "string"
        },
        address:{
            describe:"Address",
            type: "string"
        },
        contact:{
            describe:"Contact No",
            type: "string"
        },
        date:{
            describe:"Visit Dare",
            type: "string"
        }
    },
    handler(argv){
        db.update(argv.id, argv.name, argv.address, argv.contact, argv.date);
    }

});

//delete
yargs.command({

    command: "delete",
    describe: "To delete",
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type: "number"
        },
        name:{
            describe:"Name",
            type: "string"
        },
        address:{
            describe:"Address",
            type: "string"
        },
        contact:{
            describe:"Contact No",
            type: "string"
        },
        date:{
            describe:"Visit Dare",
            type: "string"
        }
    },
    handler(argv){
        db.remove(argv.id);
    }

});

//read
yargs.command({

    command: "read",
    describe: "To read",
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type: "number"
        },
        name:{
            describe:"Name",
            type: "string"
        },
        address:{
            describe:"Address",
            type: "string"
        },
        contact:{
            describe:"Contact No",
            type: "string"
        },
        date:{
            describe:"Visit Dare",
            type: "string"
        }
    },
    handler(argv){
        db.read(argv.id);
    }

});

//list
yargs.command({

    command: "list",
    describe: "Get List",
    handler(argv){
        db.list(argv.id);
    }

});

yargs.parse();
