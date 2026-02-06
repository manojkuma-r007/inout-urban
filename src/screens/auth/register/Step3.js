import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import CheckBox from '@react-native-community/checkbox';

const daysList = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function Step3({ navigation }) {
  const [schedule, setSchedule] = useState(
    daysList.map(day => ({
      day,
      enabled: day !== "Sunday",
      start: "10:00",
      end: "18:00",
    }))
  );

  const updateDay = (index, key, value) => {
    const data = [...schedule];
    data[index][key] = value;
    setSchedule(data);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Multi-step Registration</Text>
        <Text style={styles.subtitle}>Step 3 of 5</Text>

        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>

        <Text style={styles.info}>
          Set weekly schedule. Toggle day off for leaves.
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          {schedule.map((item, index) => (
            <View
              key={item.day}
              style={[
                styles.dayCard,
                !item.enabled && styles.dayOff,
              ]}
            >
              <View style={styles.row}>
                <View style={styles.row}>
                  <CheckBox
                    value={item.enabled}
                    onValueChange={val => updateDay(index, "enabled", val)}
                  />
                  <Text style={styles.day}>{item.day}</Text>
                </View>

                <Text style={styles.status}>
                  {item.enabled ? "Working" : "Day Off"}
                </Text>
              </View>

              {item.enabled && (
                <View style={styles.timeRow}>
                  <View style={styles.timeBox}>
                    <Text style={styles.label}>Start</Text>
                    <Picker
                      selectedValue={item.start}
                      onValueChange={val =>
                        updateDay(index, "start", val)
                      }
                    >
                      <Picker.Item label="09:00" value="09:00" />
                      <Picker.Item label="10:00" value="10:00" />
                      <Picker.Item label="11:00" value="11:00" />
                    </Picker>
                  </View>

                  <View style={styles.timeBox}>
                    <Text style={styles.label}>End</Text>
                    <Picker
                      selectedValue={item.end}
                      onValueChange={val =>
                        updateDay(index, "end", val)
                      }
                    >
                      <Picker.Item label="17:00" value="17:00" />
                      <Picker.Item label="18:00" value="18:00" />
                      <Picker.Item label="19:00" value="19:00" />
                    </Picker>
                  </View>
                </View>
              )}
            </View>
          ))}
        </ScrollView>

        <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Text>‹ Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => navigation.navigate("Register4")}
          >
            <Text style={{ color: "#fff" }}>Next ›</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef3ff",
    padding: 15,
    // marginTop:50,
  },
  card: {
    // backgroundColor: "#fff",
    // borderRadius: 15,
    // padding: 15,
    // flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop:50,
  },
  subtitle: {
    color: "#777",
    marginVertical: 4,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginVertical: 12,
  },
  progress: {
    width: "60%",
    height: "100%",
    backgroundColor: "#5aa79a",
    borderRadius: 10,
  },
  info: {
    marginBottom: 10,
    color: "#666",
  },
  dayCard: {
    backgroundColor: "#eaf6f3",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  dayOff: {
    backgroundColor: "#f1f1f1",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  day: {
    fontSize: 16,
    marginLeft: 6,
  },
  status: {
    color: "#777",
  },
  timeRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  timeBox: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "#dff1ec",
    borderRadius: 8,
  },
  label: {
    fontSize: 12,
    color: "#666",
    paddingLeft: 8,
    paddingTop: 6,
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  backBtn: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  nextBtn: {
    backgroundColor: "#5aa79a",
    padding: 12,
    borderRadius: 10,
    paddingHorizontal: 25,
  },
});