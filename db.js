const fs = require('fs');

const add =(name,address,contact,date)=>{
    const guest = loadGuest();
    const length = guest.length;
    let id = 1;
    if (length>0) {
        id=guest[length-1].id+1;
    }
    guest.push({
        id,
        name,
        address,
        contact,
        date
    });
    saveGuest(guest);

    console.log("Data Saved");
}

const update =(id,name,address,contact,date)=>{

    const guests = loadGuest();
    const guestIndex = guests.findIndex((guest)=>guest.id===id);
    if (guestIndex != -1) {
        const guest = guests[guestIndex]; 
        guest.name = name ? name: guest.name;
        guest.address = address ? address: guest.address;
        guest.contact = contact ? contact: guest.contact;
        guest.data = date ? date: guest.data;

        saveGuest(guests);
        console.log("Updated record: ",id);
    }else{
        console.log("No Record ");

    }
}

const remove =(id)=>{
    console.log("Delete");
    const guests = loadGuest();
    const newGuest = guests.filter((newGuest)=>newGuest.id != id);
    if (guests.length>newGuest.length) {
        saveGuest(newGuest);
        console.log("Deleted: ", id);
    }else{
        console.log("No Record Found");
    }
}
 
const read =(id)=>{
    console.log("Read");
    const guests = loadGuest();
    const guest = guests.find((guest)=>guest.id === id);
    if (guest) {
        console.log(guest);
    }else{
        console.log("No Record Found");
    }
    
}

const list =()=>{
    console.log("List");
    const guests = loadGuest();
    guest.forEach((guests) => {
        console.log(guests);
    });
}

const saveGuest=(guest)=>{
    const dataJSON = JSON.stringify(guest);
    fs.writeFileSync("data.json",dataJSON);
}

const loadGuest =()=>{
    try {
        const dataBuffer = fs.readFileSync("data.json");
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        return data; 
    } catch (e) {
        return [];
    }

}

module.exports = {add, update, remove, read, list}