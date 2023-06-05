import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react';
import db from '../../firebase/config';
import CreateVaga from '../components/CreateVaga';

function Dashboard() {
  return <CreateVaga />;
}

export default Dashboard;
