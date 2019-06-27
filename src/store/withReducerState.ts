import { connect } from "react-redux";

const mapStateToProps = ({ userReducer }: any) => ({
  userReducer
});

const mapDispatchToProps = {};

const withReducerState = (page: any) => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(page);
};
export default withReducerState;
