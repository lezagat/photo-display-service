DROP KEYSPACE IF EXISTS cycling;

CREATE KEYSPACE cycling
  WITH REPLICATION = {
   'class' : 'NetworkTopologyStrategy', 
   'boston'  : 3 , // Datacenter 1 
   'seattle' : 2 , // Datacenter 2
   'tokyo'   : 2   // Datacenter 3
  };

USE cycling;

