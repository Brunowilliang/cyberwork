// import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://tsdcqvtcnbwbdezofktk.supabase.co";
const SUPABASE_APIKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZGNxdnRjbmJ3YmRlem9ma3RrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTUyMDM4NjUsImV4cCI6MTk3MDc3OTg2NX0.j-XN7HcSfsm0KYhoRKGvrHW4jSUv33djfqyme26lW84";

export const supabase = createClient(SUPABASE_URL, SUPABASE_APIKEY, {});