import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  Text, Divider, Card,
} from '@ui-kitten/components';

export default PendingBuyer = ({ buyer }) => {
  console.log(buyer)
  return (
    <View>

      <Card style={styles.card} >
        <Text style={styles.stopsCountText}>
          Deliver to
          </Text>
        <Text style={styles.name}>
          {buyer.title}
        </Text>
        <Text style={styles.distance}>{buyer.distance}</Text>
        <Divider style={styles.divider} />
        <View style={styles.addrPhone}>
          <Text style={styles.address}>Address:</Text>
          <Text style={styles.addressContent}>
            {buyer.address}
          </Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.addrPhone}>
          <Text style={styles.address}>Phone:</Text>
          <Text style={styles.addressContent}>
            {buyer.phone}
          </Text>
        </View>
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({
  distance: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    fontWeight: 'bold',
    marginTop: 2
  },
  dot: {
    fontSize: 30,
    color: '#747D8C',
  },
  card: {
    marginVertical: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 0.5,

    elevation: 0.5,
  },
  stopsCountText: {
    fontSize: 12.5,
    fontFamily: 'Muli',
    color: '#828282',
    fontWeight: 'normal',
  },
  name: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#515C6F',
    fontWeight: 'bold',
    fontStyle: 'normal'
  },

  orderItemStatus: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
  },
  divider: {
    padding: 0.5,
    backgroundColor: '#b8bcc4'
  },
  addrPhone: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6
  },
  address: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    fontWeight: 'bold',
    fontStyle: 'normal',
    flex: 1,
  },
  addressContent: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    fontStyle: 'normal',
    flex: 1.4,
    textAlign: 'left',
    lineHeight: 16
  },
  statusStopIcon: {
    bottom: 17.5, marginLeft: 173, marginBottom: -7
  }
});