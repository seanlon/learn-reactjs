  //contact list
  var contactList = [{
      'key': 1,
      'name': 'James Nelson',
      'mailto': 'mailto:james@jamesknelson.com'
  }, {
      'key': 2,
      'name': 'Tim Nelson',
      'mailto': null
  }, {
      'key': 3,
      'name': 'Ash Nelson',
      'mailto': 'mailto:ash@jamesknelson.com'
  }];


  //contact form entry
  var contact = { name: '', email: '', description: '' }

  //CLASS COMPONENT
  //contact list dipsplay
  var ContactItem = React.createClass({
      propTypes: {
          'name': React.PropTypes.string.isRequired,
          'mailto': React.PropTypes.string.isRequired,
          'desc': React.PropTypes.string
      },

      render: function() {
          return (React.createElement(
              'li', {
                  'key': this.props.name
              },
              React.createElement('h2', {}, this.props.name),
              React.createElement('a', {
                      href: 'mailto:' + this.props.mailto
                  },
                  this.props.mailto)
          ));
      },
  });

  //contact form display
  var ContactForm = React.createClass({
      propTypes: {
          'contact': React.PropTypes.object.isRequired
      },
      render: function() {

          xform= React.createElement('form',{'className':'ContactForm'});
          xinputName = React.createElement('input', {
              'className': 'input-name',
              'type': 'text',
              'placeholder': 'Insert name here',
              'value': this.props._contact.name 

          });    
          xinputEmail = React.createElement('input', {
              'className': 'input-email',
              'type': 'text',
              'placeholder': 'Insert email here',
              'value': this.props._contact.email 
          });
          xtextAreaDesc = React.createElement('textarea', {
              'className': 'textarea-desc', 
              'placeholder': 'Insert desc here',
              'value': this.props._contact.desc 
          });
         xbtnSubmit = React.createElement('button', {
              'className': 'btn-submit', 
              'value': 'Submit new entry',
              'type': 'submit' 
          });
         

          return React.createElement(
                {},

            );

      }

  });


  var filteredContactList = contactList
      .filter(function(_contact) {
          return _contact.mailto;
      })
      .map(function(_contact, _index) {
          return React.createElement(ContactItem, _contact);
      });

  var rootElement = React.createElement('div', {},
      React.createElement('h1', {}, "Contacts"),
      React.createElement('ul', {}, filteredContactList)
  );

  ReactDOM.render(rootElement, document.getElementById('react-app'));

  // Render our app to the DOM element with id `react-app`
  // var rootElement = React.createElement(ApplicationComponent, initialData)
  // ReactDOM.render(rootElement, document.getElementById('react-app'))
