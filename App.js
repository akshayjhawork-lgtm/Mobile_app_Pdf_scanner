import React, { useMemo, useState } from 'react';
import {
  Alert,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar as RNStatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const TABS = ['Home', 'Image Tools', 'PDF Scanner', 'PDF Tools', 'Convert', 'Compress', 'My Files', 'OCR', 'Dark'];

const homeTools = [
  { name: 'Scan PDF', icon: '📄' },
  { name: 'Image Tools', icon: '🖼️' },
  { name: 'PDF Tools', icon: '🧾' },
  { name: 'Convert', icon: '🔄' },
  { name: 'Compress', icon: '🗜️' },
  { name: 'My Files', icon: '📁' },
];
const imageTools = ['Resize Image', 'Crop Image', 'Remove Background', 'Compress Image', 'Convert Format'];
const pdfTools = ['Merge PDFs', 'Split PDF', 'Rearrange Pages', 'Delete Pages', 'Compress PDF', 'Password Protect', 'OCR (Extract Text)'];
const convertTools = ['PDF to Word', 'Word to PDF', 'Image to PDF', 'Excel to PDF'];
const compressTools = ['Compress image', 'Compress PDF', 'Compress Document'];
const files = ['Recent', 'Favorites', 'Folders', 'Invoice_1234.pdf', 'Scanned_Doc.jpg', 'Report.docx', 'Merge_File.pdf'];

function BottomAdBanner() {
  return (
    <View style={styles.bottomBannerWrap}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Ad Banner Here</Text>
      </View>
    </View>
  );
}

function ScreenHeader({ title }) {
  return (
    <View style={styles.headerWrap}>
      <Text style={styles.headerIcon}>☰</Text>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerIcon}>⋮</Text>
    </View>
  );
}

function RowItem({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.row} activeOpacity={0.8} onPress={() => onPress(label)}>
      <Text style={styles.rowText}>{label}</Text>
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );
}

function HomeScreen({ onPress }) {
  return (
    <View style={styles.card}>
      <ScreenHeader title="Office ToolsPro" />
      <View style={styles.searchWrap}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput placeholder="Search tools..." placeholderTextColor="#9ca3af" style={styles.searchInput} />
      </View>
      <View style={styles.grid}>
        {homeTools.map((tool) => (
          <TouchableOpacity key={tool.name} style={styles.tile} activeOpacity={0.85} onPress={() => onPress(tool.name)}>
            <Text style={styles.tileIcon}>{tool.icon}</Text>
            <Text style={styles.tileText}>{tool.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

function DarkScreen({ onPress }) {
  return (
    <View style={[styles.card, styles.cardDark]}>
      <ScreenHeader title="Dark Mode" />
      <View style={styles.grid}>
        {homeTools.map((tool) => (
          <TouchableOpacity key={tool.name} style={[styles.tile, styles.tileDark]} activeOpacity={0.85} onPress={() => onPress(tool.name)}>
            <Text style={styles.tileIcon}>{tool.icon}</Text>
            <Text style={styles.tileTextDark}>{tool.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const onItemPress = (item) => Alert.alert('Clicked', `${item} selected`);

  const content = useMemo(() => {
    if (activeTab === 'Home') {
      return <HomeScreen onPress={onItemPress} />;
    }

    if (activeTab === 'PDF Scanner') {
      return (
        <View style={styles.card}>
          <ScreenHeader title="PDF Scanner" />
          <View style={styles.scannerSurface}>
            <View style={styles.doc}><Text style={styles.docText}>Expense Report</Text></View>
            <TouchableOpacity style={styles.capture} onPress={() => onItemPress('Capture')}><Text style={styles.captureText}>Capture</Text></TouchableOpacity>
          </View>
        </View>
      );
    }

    if (activeTab === 'OCR') {
      return (
        <View style={[styles.card, styles.cardDark]}>
          <ScreenHeader title="OCR Result" />
          <View style={styles.ocrBox}>
            <Text style={styles.rowText}>{`Expense Report\nTotal: $1,245\nTravel Cost: $456\nMeals: $123\nOffice Supplies: $85`}</Text>
          </View>
          <TouchableOpacity style={styles.capture} onPress={() => onItemPress('Copy Text')}><Text style={styles.captureText}>✓ Copy Text</Text></TouchableOpacity>
        </View>
      );
    }

    if (activeTab === 'Dark') {
      return <DarkScreen onPress={onItemPress} />;
    }

    const map = {
      'Image Tools': imageTools,
      'PDF Tools': pdfTools,
      Convert: convertTools,
      Compress: compressTools,
      'My Files': files,
    };

    return (
      <View style={styles.card}>
        <ScreenHeader title={activeTab} />
        <ScrollView style={styles.listScroll} contentContainerStyle={styles.listContent}>
          {map[activeTab].map((item) => (
            <RowItem key={item} label={item} onPress={onItemPress} />
          ))}
        </ScrollView>
      </View>
    );
  }, [activeTab]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabBar} contentContainerStyle={styles.tabBarInner}>
        {TABS.map((tab) => (
          <TouchableOpacity key={tab} style={[styles.tab, activeTab === tab && styles.tabActive]} onPress={() => setActiveTab(tab)}>
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.mainBody}>{content}</View>
      <BottomAdBanner />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef1f6',
    paddingHorizontal: 12,
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight || 8 : 0,
  },
  tabBar: { maxHeight: 46, marginBottom: 8 },
  tabBarInner: { gap: 8, paddingBottom: 6 },
  tab: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999, backgroundColor: '#ffffff' },
  tabActive: { backgroundColor: '#2d74e8' },
  tabText: { color: '#222', fontSize: 12, fontWeight: '600' },
  tabTextActive: { color: '#fff' },
  mainBody: { flex: 1 },
  card: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#dce1ea',
    overflow: 'hidden',
  },
  cardDark: { backgroundColor: '#111827' },
  headerWrap: {
    height: 50,
    backgroundColor: '#f9fafb',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: { fontSize: 34/2, fontWeight: '800', color: '#2368d8' },
  headerIcon: { fontSize: 20, color: '#1f2937', minWidth: 24, textAlign: 'center' },
  searchWrap: {
    margin: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d9dee8',
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    height: 42,
  },
  searchIcon: { marginRight: 6, color: '#9ca3af' },
  searchInput: { flex: 1, color: '#1f2937' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 12, gap: 10, paddingBottom: 14 },
  tile: {
    width: '47%',
    minHeight: 104,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e1e6ef',
  },
  tileDark: { backgroundColor: '#0b1220', borderColor: '#1f2937' },
  tileIcon: { fontSize: 28, marginBottom: 8 },
  tileText: { fontWeight: '700', color: '#1f2a3d', fontSize: 20/1.6 },
  tileTextDark: { fontWeight: '700', color: '#e5e7eb', fontSize: 20/1.6 },
  listScroll: { flex: 1 },
  listContent: { padding: 12, gap: 8 },
  row: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 12,
    minHeight: 48,
    borderWidth: 1,
    borderColor: '#e1e6ef',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowText: { fontSize: 16, fontWeight: '600', color: '#1f2a3d', lineHeight: 24 },
  chevron: { fontSize: 22, color: '#9ca3af' },
  scannerSurface: { flex: 1, margin: 12, backgroundColor: '#111827', borderRadius: 12, padding: 12 },
  doc: { height: 360, backgroundColor: '#fff', borderRadius: 6, alignItems: 'center', justifyContent: 'center' },
  docText: { fontSize: 18, fontWeight: '700' },
  capture: { marginTop: 12, backgroundColor: '#2d74e8', borderRadius: 999, alignItems: 'center', paddingVertical: 12 },
  captureText: { color: '#fff', fontWeight: '700', fontSize: 17 },
  ocrBox: { margin: 12, padding: 12, backgroundColor: '#fff', borderRadius: 10, minHeight: 280 },
  bottomBannerWrap: { paddingTop: 8, paddingBottom: 8 },
  banner: { backgroundColor: '#165fce', alignItems: 'center', justifyContent: 'center', minHeight: 42, borderRadius: 8 },
  bannerText: { color: '#fff', fontWeight: '700', fontSize: 24/2 },
});
