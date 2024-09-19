const express = require('express');
const router = express.Router();
const EventController = require('../controller/eventController');
const { validateEvento, validateEventoId } = require('../middlewares/eventoValidator');

// Listar todos os eventos
router.get('/', EventController.getAll);

// Criar um novo evento com validação
router.post('/', validateEvento, EventController.create);

// Buscar um evento específico
router.get('/:id', validateEventoId, EventController.getOne);

// Atualizar um evento com validação
router.put('/:id', validateEventoId, validateEvento, EventController.update);

// Excluir um evento
router.delete('/:id', validateEventoId, EventController.delete);

// Listar todos os participantes de um evento específico
router.get('/:id/participante', validateEventoId, EventController.getParticipants);

// Listar todos os participantes de um evento específico usando o eventoId
router.get('/participante/por-evento/:eventoId', EventController.getPartiscipantsByEvent);

module.exports = router;
