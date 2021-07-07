'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const SalesOrder = new Schema({
        serviceorder_id: {
            type:String,
            
        },
        customer_id: {
            type:String,
            
        },
        customer_type: {
            type:String,
            
        },
        transaction_type: {
            type:String,
            
        },
        status: {
            type:String,
            
        },
        priority: {
            type:String,
            
        },
        status:{
            type:Boolean,
            required:true
        },
        geolocation: {
            type:String,
            required:true
        },
        serviceorders_total: {
            type:String,
            
        },
        serviceorders_issue: {
            type:String,
           
        },
        serviceorders_need_action: {
            type:String,
            
        },
        street: {
            type:String,
            
        },
        city: {
            type:String,
            
        },
        state: {
            type:String,
            
        },
        zip: {
            type:String,
            
        },
        phone: {
            type:String,
            
        },
        custname: {
            type:String,
           
        }
    });


    
// create and export model
module.exports = mongoose.model("todoModel", SalesOrder);