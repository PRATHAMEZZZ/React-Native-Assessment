import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  FlatList,
  StatusBar,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

import categories from "./data/categories";
import popular from "./data/popular";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar translucent={false} />
      {/* Header */}
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="text-md text-gray-600 ml-1">Deliver to</Text>
          <View className="flex-row items-center gap-1 ">
            <MaterialIcons name="location-on" size={20} />
            <Text className="text-md font-bold">New York, USA</Text>
            <MaterialIcons name="arrow-drop-down" size={30} />
          </View>
        </View>
        <View className="flex-row justify-between items-center py-4 relative">
          <Octicons name="feed-person" size={25} />
          <View className="absolute right-[-12px] top-[5px] ">
            <Entypo name="dot-single" color="red" size={30} />
          </View>
        </View>
      </View>

      {/* Search Bar and Settings Icon */}
      <View className="flex-row items-center space-x-2 px-4 mb-4">
        <View className="flex-row items-center border border-gray-200 rounded-lg bg-gray-100 px-2">
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            placeholder="Search restaurants or foods"
            className="h-100 w-[270px] py-2 ml-2"
          />
        </View>
        <TouchableOpacity className="bg-red-600 p-2 rounded-md h-[40px]">
          <MaterialIcons
            name="settings-input-component"
            color={"white"}
            size={20}
          />
        </TouchableOpacity>
      </View>

      {/* Poster */}
      <View className="h-[150px] m-4 rounded-lg overflow-hidden">
        <ImageBackground
          source={require("./assets/images/poster.jpg")}
          className="h-full w-full"
          resizeMode="cover"
        ></ImageBackground>
      </View>

      {/* Categories Section */}
      <View>
        <View className="flex-row justify-between items-center px-4 mb-2">
          <Text className="text-lg font-bold">Categories</Text>
          <TouchableOpacity>
            <Text className="text-red-600 font-bold">See All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={categories?.slice(0, 5)}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          renderItem={({ item }) => (
            <View
              className={`p-2 rounded-lg mr-4 h-[120px] w-[100px] items-center bg-red-100`}
            >
              <Image source={item.image} className="h-20 w-20 mb-2" />
              <Text className="text-md font-semibold text-gray-700">
                {item.name}
              </Text>
            </View>
          )}
        />
      </View>

      <View className="">
        <View className="flex-row justify-between items-center mt-4 px-4 mb-2">
          <Text className="text-lg font-bold">Popular</Text>
          <TouchableOpacity>
            <Text className="text-red-600 font-bold">See All</Text>
          </TouchableOpacity>
        </View>

        {/* Popular */}
        <FlatList
          data={popular}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          renderItem={({ item }) => (
            <View
              className={`rounded-lg overflow-hidden mr-4 h-[180px] w-[220px] border border-1 border-gray-100 shadow-4xl`}
            >
              <Image
                source={item.image}
                className="h-[100px] w-[100%] mb-2 "
                resizeMode="cover"
              />
              <View>
                <View className="flex-row justify-between mx-2">
                  <Text className="text-md font-semibold text-gray-700">
                    {item.name}
                  </Text>
                  <Text className="text-md font-semibold text-gray-400 ">
                    {item.location}
                  </Text>
                </View>

                <View className="flex-row justify-between pl-2">
                  <View>
                    <Text className="text-sm  text-gray-400">
                      {item.cafeName}
                    </Text>
                    <View className="flex-row items-center space-x-1 mt-1 ">
                      <AntDesign name="star" size={15} color={"#FFDF00"} />
                      <Text className="text-md font-semibold text-gray-400 ">
                        {item.rating} (941 Ratings)
                      </Text>
                    </View>
                  </View>
                  <View className="bg-red-600 flex-row items-center rounded-tl-md text-md">
                    <Text className="text-white px-2 ">$ 8.99</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
