import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React, { FC, useEffect } from "react";
import {
  AddNb,
  AddNbDouble,
  GetPublicIPSaga,
  ResetNb,
} from "redux-services/modules/common";

interface HomeProps {
  listeNombre: number[];
  listeNombreDouble: number[];
  listeTriple: number[];
  total: number;
  myIp: string;
  addNb: AddNb;
  resetNb: ResetNb;
  addNbDouble: AddNbDouble;
  getPublicIPSaga: GetPublicIPSaga;
}

const Home: FC<HomeProps> = (props) => {
  const {
    listeNombre,
    listeNombreDouble,
    listeTriple,
    total,
    myIp,
    addNb,
    resetNb,
    addNbDouble,
    getPublicIPSaga,
  } = props;

  const handleAddNb = () => {
    // Do some stuff ...
    const newNumber = listeNombre.length;
    addNb(newNumber);
    // addNbDouble(newNumber * 2);
  };

  // Get my PUBLIC IP on mount
  useEffect(() => {
    getPublicIPSaga("MG");
  }, []);

  return (
    <Box>
      <Typography component="h1">Home: {myIp}</Typography>
      <Box display="flex" my={2} justifyContent="center">
        <Box mr={4}>
          <Button variant="contained" color="primary" onClick={handleAddNb}>
            Add NB
          </Button>
        </Box>
        <Button variant="contained" color="secondary" onClick={() => resetNb()}>
          Reset NB
        </Button>
      </Box>

      <Box display="flex" justifyContent="center">
        <Box mr={2}>
          {listeNombre.map((n) => (
            <Box key={n}>{n}</Box>
          ))}
        </Box>
        <Box mr={4}>
          {listeNombreDouble.map((n) => (
            <Box key={n}>{n}</Box>
          ))}
        </Box>
        <Box>
          {listeTriple.map((n) => (
            <Box key={n}>{n}</Box>
          ))}
        </Box>
      </Box>

      <Box>
        <Typography variant="h1">Total: {total}</Typography>
      </Box>
    </Box>
  );
};

export default Home;
