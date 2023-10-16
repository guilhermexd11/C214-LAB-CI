const chai = require('chai');
const assert = chai.assert;

// Importe as funções que você deseja testar
const { addTask, updateStatus, deleteTask, getTasks } = require('../src/script');

describe('Testes do Gerenciador de Tarefas', () => {
    beforeEach(() => {
        // Limpa a lista de tarefas antes de cada teste ...
        tasks = [];
      });

    
    it('Deve adicionar uma nova tarefa', () => {
        const initialLength = getTasks().length;

        addTask('Nova Tarefa', 'Descrição da Nova Tarefa', 'alta');
        
        assert.lengthOf(getTasks(), initialLength + 1);
        assert.equal(getTasks()[getTasks().length - 1].title, 'Nova Tarefa');
        assert.equal(getTasks()[getTasks().length - 1].status, 'A fazer');
    });

    it('Deve atualizar o status de uma tarefa', () => {
        const index = 0;
        const newStatus = 'Concluída';

        updateStatus(index, newStatus);
        
        assert.equal(getTasks()[index].status, newStatus);
        assert.property(getTasks()[index], 'completionDate');
    });

    it('Deve excluir uma tarefa', () => {
        const index = 0;
        
        addTask('Nova Tarefa 1', 'Descrição da Nova Tarefa', 'alta');
        deleteTask(index);
        
        assert.lengthOf(getTasks(), 1);
        assert.equal(getTasks()[index].title, 'Nova Tarefa 1');
    });
});