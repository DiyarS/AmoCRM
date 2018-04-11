import AmoCRM from '../../src/AmoCRM';
import config from '../support/config';

let client;

beforeEach( done => {
  client = new AmoCRM( config );
  client
    .connect()
    .then( done );
});

describe( 'AmoCRM API Note Interface', () => {
  it( 'should create note', done => {
    const lead = new client.Lead({
      name: 'lead form notes'
    });

    lead.save()
      .then( lead => client.Note.of(
        {
          element_id: lead.id,
          element_type: client.Note.ELEMENT_TYPE.LEAD,
          text: 'Hello from Moscow!'
        }
      ).save())
      .then( note => {
        expect( note.id ).toBeDefined();
        expect( note.element_id ).toBe( lead.id );
        done();
      });

  });

  fit( 'should create note from notable behavior', done => {
    const lead = new client.Lead({
        name: 'lead form notes'
      }),
      note = new client.Note({
        text: 'Hello from Moscow!'
      });

    lead.save()
      .then( lead => lead.notes.add( note ))
      .then( note => {
        expect( note.id ).toBeDefined();
        expect( note.element_id ).toBe( lead.id );
        done();
      });

  });

  it( 'should create and update note', done => {
    const note = new client.Note({
      text: 'empty note'
    });
    note.save()
      .then(() => {
        note.text = 'empty note manager';
        note.updated_at = Math.floor( new Date / 1000 ) + 10;
        return note.save();
      })
      .then(() => client.Note.findById( note.id ))
      .then(({ text }) => {
        expect( text ).toBe( 'empty note manager' );
        done();
      });
  });

  it( 'create note and remove it', done => {
    const note = new client.Note;
    note.text = 'Note for deletion';
    note.save()
      .then(() => note.remove())
      .then(() => client.Note.findById( note.id ))
      .then( removedNote => {
        expect( removedNote ).toBeUndefined();
        done();
      });
  });
});
