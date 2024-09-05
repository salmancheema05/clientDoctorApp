import { View } from "react-native";
import Navigation from "./src/navigation";
import { ThemeProvider, useTheme } from "./src/theme/context";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const theme = useTheme();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          <View style={{ flex: 1 }}>
            <Navigation />
          </View>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
