import React from 'react'

import api from '../UseBooks';

class BookDetailsContainer extends React.Component {
    
    state = {
      loading: true,
      error: null,
      data: undefined,
      modalIsOpen: false,
    };
  
    componentDidMount() {
      this.fetchData();
    }
  
    fetchData = async () => {
      this.setState({ loading: true, error: null });
  
      try {
        const data = await api.books.read(this.props.match.params.bookId);
        this.setState({ loading: false, data: data });
      } catch (error) {
        this.setState({ loading: false, error: error });
      }
    };
  
    handleOpenModal = e => {
      this.setState({ modalIsOpen: true });
    };
  
    handleCloseModal = e => {
      this.setState({ modalIsOpen: false });
    };
  
    handleDeletebook = async e => {
      this.setState({ loading: true, error: null });
  
      try {
        await api.books.remove(this.props.match.params.bookId);
        this.setState({ loading: false });
  
        this.props.history.push('/');
      } catch (error) {
        this.setState({ loading: false, error: error });
      }
    };
  
    render() {
      
      return (
        <bookDetails
          onCloseModal={this.handleCloseModal}
          onOpenModal={this.handleOpenModal}
          modalIsOpen={this.state.modalIsOpen}
          onDeletebook={this.handleDeletebook}
          books={this.state.data}
        />
      );
    }
  }

export default BookDetailsContainer
