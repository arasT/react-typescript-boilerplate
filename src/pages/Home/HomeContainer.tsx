import { connect } from "react-redux";
import { RootState } from "redux-services";
import {
  addNb,
  resetNb,
  addNbDouble,
  getListTriple,
  getListTotal,
  getPublicIPSaga,
} from "redux-services/modules/common";
import Home from "./Home";

const mapStateToProps = (state: RootState) => ({
  listeNombre: state.common.listNb,
  listeNombreDouble: state.common.listDouble,
  listeTriple: getListTriple(state.common.listNb),
  total: getListTotal(state.common.listNb, state.common.listDouble),
  myIp: state.common.currentIP,
});

const mapDistpatchToProps = {
  addNb,
  resetNb,
  addNbDouble,
  getPublicIPSaga,
};

export default connect(mapStateToProps, mapDistpatchToProps)(Home);
