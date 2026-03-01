import React, { useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const TABS = [
  'Home',
  'Image Tools',
  'PDF Scanner',
  'PDF Tools',
  'Convert',
  'Compress',
  'My Files',
  'OCR',
  'Dark',
];

const homeTools = ['Scan PDF', 'Image Tools', 'PDF Tools', 'Convert', 'Compress', 'My Files'];
const imageTools = ['Resize Image', 'Crop Image', 'Remove Background', 'Compress Image', 'Convert Format'];
const pdfTools = ['Merge PDFs', 'Split PDF', 'Rearrange Pages', 'Delete Pages', 'Compress PDF', 'Password Protect', 'OCR (Extract Text)'];
const convertTools = ['PDF to Word', 'Word to PDF', 'Image to PDF', 'Excel to PDF'];
const compressTools = ['Compress image', 'Compress PDF', 'Compress Document'];
const files = ['Recent', 'Favorites', 'Folders', 'Invoice_1234.pdf', 'Scanned_Doc.jpg', 'Report.docx', 'Merge_File.pdf'];

function BannerAdPlaceholder() {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerText}>Ad Banner Here</Text>
    </View>
  );
}

function SectionCard({ title, children, dark = false }) {
  return (
    <View style={[styles.card, dark && styles.cardDark]}>
      <Text style={[styles.cardTitle, dark && styles.textDark]}>{title}</Text>
      {children}
      <BannerAdPlaceholder />
    </View>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const content = useMemo(() => {
    switch (activeTab) {
      case 'Home':
        return (
          <SectionCard title="Office ToolsPro">
            <View style={styles.grid}>
              {homeTools.map((tool) => (
                <View key={tool} style={styles.tile}>
                  <Text style={styles.tileText}>{tool}</Text>
                </View>
              ))}
            </View>
          </SectionCard>
        );
      case 'Image Tools':
        return (
          <SectionCard title="Image Tools">
            {imageTools.map((item) => (
              <View key={item} style={styles.row}><Text style={styles.rowText}>{item}</Text></View>
            ))}
          </SectionCard>
        );
      case 'PDF Scanner':
        return (
          <SectionCard title="PDF Scanner">
            <View style={styles.scannerSurface}>
              <View style={styles.doc}><Text style={styles.docText}>Expense Report</Text></View>
              <TouchableOpacity style={styles.capture}><Text style={styles.captureText}>Capture</Text></TouchableOpacity>
            </View>
          </SectionCard>
        );
      case 'PDF Tools':
        return (
          <SectionCard title="PDF Tools">
            {pdfTools.map((item) => (
              <View key={item} style={styles.row}><Text style={styles.rowText}>{item}</Text></View>
            ))}
          </SectionCard>
        );
      case 'Convert':
        return (
          <SectionCard title="Convert Files">
            <View style={styles.grid}>
              {convertTools.map((item) => (
                <View key={item} style={styles.tile}><Text style={styles.tileText}>{item}</Text></View>
              ))}
            </View>
          </SectionCard>
        );
      case 'Compress':
        return (
          <SectionCard title="Compress Files">
            {compressTools.map((item) => (
              <View key={item} style={styles.row}><Text style={styles.rowText}>{item}</Text></View>
            ))}
            <TouchableOpacity style={styles.capture}><Text style={styles.captureText}>Compress</Text></TouchableOpacity>
          </SectionCard>
        );
      case 'My Files':
        return (
          <SectionCard title="My Files">
            {files.map((item) => (
              <View key={item} style={styles.row}><Text style={styles.rowText}>{item}</Text></View>
            ))}
          </SectionCard>
        );
      case 'OCR':
        return (
          <SectionCard title="OCR Result">
            <View style={styles.ocrBox}>
<Text style={styles.rowText}>{`Expense Report\nTotal: $1,245\nTravel Cost: $456\nMeals: $123\nOffice Supplies: $85`}</Text>
            </View>
            <TouchableOpacity style={styles.capture}><Text style={styles.captureText}>Copy Text</Text></TouchableOpacity>
          </SectionCard>
        );
      case 'Dark':
        return (
          <SectionCard title="Dark Mode" dark>
            <View style={styles.grid}>
              {homeTools.map((tool) => (
                <View key={tool} style={[styles.tile, styles.tileDark]}>
                  <Text style={styles.tileTextDark}>{tool}</Text>
                </View>
              ))}
            </View>
          </SectionCard>
        );
      default:
        return null;
    }
  }, [activeTab]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Office ToolsPro Mobile App (Android/iOS)</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabBar} contentContainerStyle={styles.tabBarInner}>
        {TABS.map((tab) => (
          <TouchableOpacity key={tab} style={[styles.tab, activeTab === tab && styles.tabActive]} onPress={() => setActiveTab(tab)}>
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView contentContainerStyle={styles.content}>{content}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eef1f6', paddingHorizontal: 12 },
  title: { fontSize: 18, fontWeight: '700', marginTop: 8, marginBottom: 8, textAlign: 'center' },
  tabBar: { maxHeight: 48 },
  tabBarInner: { gap: 8, paddingBottom: 8 },
  tab: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999, backgroundColor: '#fff' },
  tabActive: { backgroundColor: '#2d74e8' },
  tabText: { color: '#222', fontSize: 13, fontWeight: '600' },
  tabTextActive: { color: '#fff' },
  content: { paddingBottom: 20 },
  card: { backgroundColor: '#f5f6f9', borderRadius: 16, borderWidth: 1, borderColor: '#dce1ea', overflow: 'hidden' },
  cardDark: { backgroundColor: '#121722' },
  cardTitle: { fontSize: 24, fontWeight: '800', textAlign: 'center', paddingVertical: 14 },
  textDark: { color: '#fff' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, padding: 12 },
  tile: { width: '47%', minHeight: 70, backgroundColor: '#fff', borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#e1e6ef' },
  tileDark: { backgroundColor: '#1b2230', borderColor: '#2b364d' },
  tileText: { fontWeight: '600', color: '#1f2a3d' },
  tileTextDark: { fontWeight: '600', color: '#eaf1ff' },
  row: { marginHorizontal: 12, marginBottom: 8, backgroundColor: '#fff', borderRadius: 10, padding: 12, borderWidth: 1, borderColor: '#e1e6ef' },
  rowText: { fontSize: 16, fontWeight: '600', color: '#1f2a3d', lineHeight: 24 },
  scannerSurface: { margin: 12, backgroundColor: '#2c2c2c', borderRadius: 12, padding: 12 },
  doc: { height: 200, backgroundColor: '#fff', borderRadius: 6, alignItems: 'center', justifyContent: 'center' },
  docText: { fontSize: 18, fontWeight: '600' },
  capture: { margin: 12, backgroundColor: '#2d74e8', borderRadius: 999, alignItems: 'center', paddingVertical: 12 },
  captureText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  ocrBox: { margin: 12, padding: 12, backgroundColor: '#fff', borderRadius: 10 },
  banner: { backgroundColor: '#165fce', alignItems: 'center', justifyContent: 'center', minHeight: 40, marginTop: 10 },
  bannerText: { color: '#fff', fontWeight: '600' },
});
