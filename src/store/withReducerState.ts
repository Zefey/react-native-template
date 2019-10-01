import { connect } from "react-redux";

const mapStateToProps = ({ userReducer,stackReducer }: any) => ({
  userReducer,
  stackReducer
});

const mapDispatchToProps = {};

const withReducerState = (page: any) => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(page);
};
export default withReducerState;
