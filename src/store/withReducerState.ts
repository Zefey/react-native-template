import { connect } from 'react-redux';

const mapStateToProps = ({ userReducer, nav }: any) => ({
    userReducer,
    nav,
});

const mapDispatchToProps = {};

const withReducerState = (page: any) => {
    return connect(mapStateToProps, mapDispatchToProps)(page);
};
export default withReducerState;
