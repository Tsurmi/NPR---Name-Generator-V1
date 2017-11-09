const express = require('express')

const Router = express.Router()
const Host = require('../models/Host')

Router.route('/')
  .get((req, res) => {
    Host.find((err, hosts) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: 'all the host', data: hosts })
      }
    })
  })
  .post((req, res) => {
    const host = new Host()
    host.loadData(req.body)
    host.save((err, host) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        console.log('added host from backend', host)
        res.json({ message: 'Added new Host', data: host })
      }
    })
  })
Router.route('/id/:host_id')
  .delete((req, res) => {
    Host.remove({_id: req.params.host_id}, (err) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: 'Host Deleted', data: {} })
      }
    })
  })
  .put((req, res) => {
    Host.findById(req.params.host_id, (er, host) => {
      if (er) return res.status(500)
      if (!host) return res.status(400)
      host.loadData(req.body)
      host.save((err, updatedHost) => {
        if (err) {
          res.json({ message: err, data: null })
        } else {
          res.json({ updatedHost, message: 'Host Updated' })
        }
      })
    })
  })
  .get((req, res) => {
    Host.findById({_id: req.params.host_id}, (err, host) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: 'Host recieved', data: host })
      }
    })
  })
Router.route('/random')
  .get((req, res) => {
    Host.find((err, hosts) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        const host = hosts[Math.floor(Math.random() * hosts.length)]
        res.json({ message: 'random host selected', data: host })
      }
    })
  })
module.exports = Router
