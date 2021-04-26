import { connect } from "react-redux";
import { RootState } from "redux-services";
import {
  addNb,
  resetNb,
  addNbDouble,
  getListTriple,
  getListTotal,
} from "redux-services/modules/common";
import Home from "./Home";

const mapStateToProps = (state: RootState) => ({
  listeNombre: state.common.listNb,
  listeNombreDouble: state.common.listDouble,
  listeTriple: getListTriple(state.common.listNb),
  total: getListTotal(state.common.listNb, state.common.listDouble),
});

const mapDistpatchToProps = {
  addNb,
  resetNb,
  addNbDouble,
};

export default connect(mapStateToProps, mapDistpatchToProps)(Home);
