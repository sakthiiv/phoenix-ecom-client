import React, {Component} from 'react';
import {fetchMoviesDetail, fetchByTitle, fetchByYear, fetchMovieDetail} from '../actions/movies';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MoviesLibrary from '../components/assign';
const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies,
        movieDetail: state.movies.movieDetail
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchMoviesDetail: fetchMoviesDetail,
        fetchByTitle: fetchByTitle,
        fetchByYear: fetchByYear,
        fetchMovieDetail:fetchMovieDetail
    }, dispatch);
  };

const MoviesLibraryContainer = connect(mapStateToProps, mapDispatchToProps)(MoviesLibrary);
export default MoviesLibraryContainer;