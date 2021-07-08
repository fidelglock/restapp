'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const SalesOrder = new Schema({
        serviceorder_id: {
            type:String,
            required:false
        },
        customer_id: {
            type:String,
            required:false
        },
        customer_type: {
            type:String,
            required:false
        },
        transaction_type: {
            type:String,
            required:false
        },
        status: {
            type:String,
            required:false
        },
        priority: {
            type:String,
            required:false
        },
        status:{
            type:String,
            required:false
        },
        geolocation: {
            type:String,
            required:false
        },
        serviceorders_total: {
            type:String,
            required:false
        },
        serviceorders_issue: {
            type:String,
            required:false
        },
        serviceorders_need_action: {
            type:String,
            required:false
        },
        street: {
            type:String,
            required:false
        },
        city: {
            type:String,
            required:false
        },
        state: {
            type:String,
            required:false
        },
        zip: {
            type:String,
            required:false
        },
        phone: {
            type:String,
            required:false
        },
        custname: {
            type:String,
            required:false
        }
    });


    
// create and export model
module.exports = mongoose.model("restappModel", SalesOrder);