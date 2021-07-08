'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const SalesOrder = new Schema({
        serviceorder_id: {
            type:String,
            required:true
        },
        customer_id: {
            type:String,
            required:true
        },
        customer_type: {
            type:String,
            required:true
        },
        transaction_type: {
            type:String,
            required:true
        },
        status: {
            type:String,
            
        },
        priority: {
            type:String,
            required:true
        },
        status:{
            type:String,
            required:true
        },
        geolocation: {
            type:String,
            required:true
        },
        serviceorders_total: {
            type:String,
            required:true
        },
        serviceorders_issue: {
            type:String,
            required:true
        },
        serviceorders_need_action: {
            type:String,
            required:true
        },
        street: {
            type:String,
            required:true
        },
        city: {
            type:String,
            required:true
        },
        state: {
            type:String,
            required:true
        },
        zip: {
            type:String,
            required:true
        },
        phone: {
            type:String,
            required:true
        },
        custname: {
            type:String,
            required:true
        }
    });


    
// create and export model
module.exports = mongoose.model("restappModel", SalesOrder);