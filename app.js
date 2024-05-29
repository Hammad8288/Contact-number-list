#! /usr/bin/env node
import inquirer from "inquirer";
let condition = true;
let contacts = [];
console.log("Welcome to your contact list");
while (condition) {
    let userInput = await inquirer.prompt([
        {
            type: "list",
            name: "contact",
            message: "What would you like to do?",
            choices: ["Add Contact", "View Contacts", "Delete Contact", "Update Contact", "Exit"]
        }
    ]);
    if (userInput.contact === "Add Contact") {
        let addContact = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of the contact?"
            },
            {
                type: "input",
                name: "number",
                message: "your contact number ?",
            }
        ]);
        console.log("Your contact number is added.");
        contacts.push(addContact);
    }
    else if (userInput.contact === "View Contacts") {
        console.log(contacts);
    }
    else if (userInput.contact === "Delete Contact") {
        let deleteContact = await inquirer.prompt([
            {
                type: "list",
                name: "delete",
                message: "What is the name of the contact you want to delete?",
                choices: contacts,
            },
        ]);
        console.log(deleteContact.delete);
        contacts = contacts.filter(item => item.name !== deleteContact.delete);
        console.log("Your updated contact number are ", contacts);
    }
    else if (userInput.contact === "Update Contact") {
        let updateContact = await inquirer.prompt([
            {
                type: "list",
                name: "update",
                message: "What is the name of the contact you want to update?",
                choices: contacts,
            },
            {
                type: "input",
                name: "name",
                message: "your updated name ?"
            },
            {
                type: "input",
                name: "number",
                message: "your updated contact number ?",
            }
        ]);
        //  console.log(updateContact.update);
        contacts = contacts.filter(item => item.name !== updateContact.update);
        contacts.push(updateContact);
        console.log("Your updated contact number are ", contacts);
    }
    else if (userInput.contact === "Exit") {
        condition = false;
        console.log("Thank you for using our contact app.");
    }
}
;
