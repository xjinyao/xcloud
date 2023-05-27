/*
 * Copyright 1999-2018 Alibaba Group Holding Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define("vs/editor/editor.main.nls.de", {
  "vs/base/browser/ui/actionbar/actionbar": ["{0} ({1})"],
  "vs/base/browser/ui/aria/aria": ["{0} (erneut aufgetreten)"],
  "vs/base/browser/ui/findinput/findInput": ["Eingabe"],
  "vs/base/browser/ui/findinput/findInputCheckboxes": ["Groß-/Kleinschreibung beachten", "Nur ganzes Wort suchen", "Regulären Ausdruck verwenden"],
  "vs/base/browser/ui/inputbox/inputBox": ["Fehler: {0}", "Warnung: {0}", "Info: {0}"],
  "vs/base/common/keybindingLabels": ["STRG", "UMSCHALTTASTE", "ALT", "Windows", "STRG", "UMSCHALTTASTE", "ALT", "Befehlstaste", "STRG", "UMSCHALTTASTE", "ALT", "Windows"],
  "vs/base/common/severity": ["Fehler", "Warnung", "Info"],
  "vs/base/parts/quickopen/browser/quickOpenModel": ["{0}, Auswahl", "Auswahl"],
  "vs/base/parts/quickopen/browser/quickOpenWidget": ["Schnellauswahl. Nehmen Sie eine Eingabe vor, um die Ergebnisse einzugrenzen.", "Schnellauswahl"],
  "vs/base/parts/tree/browser/treeDefaults": ["Zuklappen"],
  "vs/editor/browser/widget/diffEditorWidget": ["Kann die Dateien nicht vergleichen, da eine Datei zu groß ist."],
  "vs/editor/browser/widget/diffReview": ["Schließen", "Unterschied von {0} zu {1}: Original {2}, {3} Zeilen, Geändert {4}, {5} Zeilen", "leer", "Original {0}, geändert {1}: {2}", "+ geändert {0}: {1}", "- Original {0}: {1}", "Zum nächsten Unterschied wechseln", "Zum vorherigen Unterschied wechseln"],
  "vs/editor/common/config/commonEditorConfig": ["Editor", "Steuert die Schriftfamilie.", "Steuert die Schriftbreite.", "Steuert den Schriftgrad in Pixeln.", "Steuert die Zeilenhöhe. Verwenden Sie 0, um LineHeight aus der FontSize-Angabe zu berechnen.", "Steuert den Zeichenabstand in Pixeln.", 'Steuert die Anzeige von Zeilennummern. Mögliche Werte sind "Ein", "Aus" und "Relativ". "Relativ" zeigt die Zeilenanzahl ab der aktuellen Cursorposition.', "Spalten, an denen vertikale Lineale angezeigt werden sollen", "Zeichen, die als Worttrennzeichen verwendet werden, wenn wortbezogene Navigationen oder Vorgänge ausgeführt werden.", 'Die Anzahl der Leerzeichen, denen ein Tabstopp entspricht. Diese Einstellung wird basierend auf dem Inhalt der Datei überschrieben, wenn "editor.detectIndentation" aktiviert ist.', '"number" wurde erwartet. Beachten Sie, dass der Wert "auto" durch die Einstellung "editor.detectIndentation" ersetzt wurde.', 'Fügt beim Drücken der TAB-TASTE Leerzeichen ein. Diese Einstellung wird basierend auf dem Inhalt der Datei überschrieben, wenn "editor.detectIndentation" aktiviert ist.', '"boolean" wurde erwartet. Beachten Sie, dass der Wert "auto" durch die Einstellung "editor.detectIndentation" ersetzt wurde.', 'Beim Öffnen einer Datei werden "editor.tabSize" und "editor.insertSpaces" basierend auf den Dateiinhalten erkannt.', "Steuert, ob die Auswahl runde Ecken aufweist.", "Legt fest, ob der Editor Bildläufe über die letzte Zeile hinaus ausführt.", "Steuert, ob die Minikarte angezeigt wird", "Steuert, ob der Minimap-Schieberegler automatisch ausgeblendet wird.", "Die tatsächlichen Zeichen in einer Zeile rendern (im Gegensatz zu Farbblöcken)", "Breite der Minikarte beschränken, um höchstens eine bestimmte Anzahl von Spalten zu rendern", "Steuert, ob wir für die Suchzeichenfolge im Suchwidget aus der Editorauswahl ein Seeding ausführen.", 'Steuert, ob die Kennzeichnung "In Auswahl suchen" aktiviert ist, wenn mehrere Zeichen oder Textzeilen im Editor ausgewählt wurden.', "Zeilenumbrüche erfolgen nie.", "Der Zeilenumbruch erfolgt an der Breite des Anzeigebereichs.", 'Der Zeilenbereich erfolgt bei "editor.wordWrapColumn".', 'Der Zeilenumbruch erfolgt beim Mindestanzeigebereich und "editor.wordWrapColumn".', 'Steuert den Zeilenumbruch. Mögliche Einstellungen sind:\n - "off" (Umbruch deaktivieren),\n - "on" (Anzeigebereichsumbruch),\n - "wordWrapColumn" (Umbruch bei "editor.wordWrapColumn") oder\n - "bounded" (der Zeilenumbruch erfolgt beim Mindestanzeigebereich und "editor.wordWrapColumn").', 'Steuert die Umbruchspalte des Editors, wenn für "editor.wordWrap" die Option "wordWrapColumn" oder "bounded" festgelegt ist.', 'Steuert den Einzug der umbrochenen Zeilen. Der Wert kann "none", "same" oder "indent" sein.', 'Ein Multiplikator, der für die Mausrad-Bildlaufereignisse "deltaX" und "deltaY" verwendet werden soll.', 'Ist unter Windows und Linux der Taste "STRG" und unter OSX der Befehlstaste zugeordnet.', 'Ist unter Windows und Linux der Taste "Alt" und unter OSX der Wahltaste zugeordnet. ', 'Der Modifizierer, der zum Hinzufügen mehrerer Cursor mit der Maus verwendet wird. "ctrlCmd" wird unter Windows und Linux der Taste "STRG" und unter OSX der Befehlstaste zugeordnet. Die Mausbewegungen "Gehe zu Definition" und "Link öffnen" werden so angepasst, dass kein Konflikt mit dem Multi-Cursor-Modifizierer entsteht.', "Schnellvorschläge innerhalb von Zeichenfolgen aktivieren.", "Schnellvorschläge innerhalb von Kommentaren aktivieren.", "Schnellvorschläge außerhalb von Zeichenfolgen und Kommentaren aktivieren.", "Steuert, ob Vorschläge während der Eingabe automatisch angezeigt werden sollen.", "Steuert die Verzögerung in ms für die Anzeige der Schnellvorschläge.", "Aktiviert ein Pop-Up, das Parameter-Dokumentation und Typ-Information während des Tippens anzeigt", "Steuert, ob der Editor Klammern automatisch nach dem Öffnen schließt.", "Steuert, ob der Editor Zeilen automatisch nach der Eingabe formatiert.", "Steuert, ob der Editor den eingefügten Inhalt automatisch formatiert.", "Steuert, ob der Editor die Einzüge automatisch anpasst, wenn Benutzer Text eingeben oder Zeilen einfügen oder verschieben. Einzugsregeln der Sprache müssen verfügbar sein. ", "Steuert, ob Vorschläge automatisch bei der Eingabe von Triggerzeichen angezeigt werden.", 'Steuert, ob Vorschläge über die Eingabetaste (zusätzlich zur TAB-Taste) angenommen werden sollen. Vermeidet Mehrdeutigkeit zwischen dem Einfügen neuer Zeilen oder dem Annehmen von Vorschlägen. Der Wert "smart" bedeutet, dass ein Vorschlag nur über die Eingabetaste akzeptiert wird, wenn eine Textänderung vorgenommen wird.', 'Steuert, ob Vorschläge über Commitzeichen angenommen werden sollen. In JavaScript kann ein Semikolon (";") beispielsweise ein Commitzeichen sein, das einen Vorschlag annimmt und dieses Zeichen eingibt.', "Zeige Snippet Vorschläge über den anderen Vorschlägen.", "Snippet Vorschläge unter anderen Vorschlägen anzeigen.", "Zeige Snippet Vorschläge mit anderen Vorschlägen.", "Snippet Vorschläge nicht anzeigen.", "Steuert, ob Codeausschnitte mit anderen Vorschlägen angezeigt und wie diese sortiert werden.", "Steuert, ob ein Kopiervorgang ohne Auswahl die aktuelle Zeile kopiert.", "Steuert, ob Vervollständigungen auf Grundlage der Wörter im Dokument berechnet werden sollen.", "Schriftgröße für Vorschlagswidget", "Zeilenhöhe für Vorschlagswidget", "Steuert, ob der Editor der Auswahl ähnelnde Übereinstimmungen hervorheben soll.", "Steuert, ob der Editor das Vorkommen semantischer Symbole markieren soll.", "Steuert die Anzahl von Dekorationen, die an derselben Position im Übersichtslineal angezeigt werden.", "Steuert, ob um das Übersichtslineal ein Rahmen gezeichnet werden soll.", 'Steuert den Cursoranimationsstil. Gültige Werte sind "blink", "smooth", "phase", "expand" und "solid".', "Schriftart des Editors vergrößern, wenn das Mausrad verwendet und die STRG-TASTE gedrückt wird", 'Steuert den Cursorstil. Gültige Werte sind  "block", "block-outline", "line", "line-thin", "underline" und "underline-thin".', "Aktiviert Schriftartligaturen.", "Steuert die Sichtbarkeit des Cursors im Übersichtslineal.", 'Steuert, wie der Editor Leerzeichen rendert. Mögliche Optionen: "none", "boundary" und "all". Die Option "boundary" rendert keine einzelnen Leerzeichen zwischen Wörtern.', "Steuert, ob der Editor Steuerzeichen rendern soll.", "Steuert, ob der Editor Einzugsführungslinien rendern soll.", 'Steuert, wie der Editor die aktuelle Zeilenhervorhebung rendern soll. Mögliche Werte sind "none", "gutter", "line" und "all".', "Steuert, ob der Editor CodeLenses anzeigt.", "Steuert, ob für den Editor Codefaltung aktiviert ist.", "Steuert, ob die Falt-Steuerelemente an der Leiste automatisch ausgeblendet werden.", "Übereinstimmende Klammern hervorheben, wenn eine davon ausgewählt wird.", "Steuert, ob der Editor den vertikalen Glyphenrand rendert. Der Glyphenrand wird hauptsächlich zum Debuggen verwendet.", "Das Einfügen und Löschen von Leerzeichen folgt auf Tabstopps.", "Nachfolgendes automatisch eingefügtes Leerzeichen entfernen", "Peek-Editoren geöffnet lassen, auch wenn auf ihren Inhalt doppelgeklickt oder die ESC-TASTE gedrückt wird.", "Steuert, ob der Editor das Verschieben einer Auswahl per Drag and Drop zulässt.", "Der Editor verwendet Plattform-APIs, um zu erkennen, wenn eine Sprachausgabe angefügt wird.", "Der Editor wird durchgehend für die Verwendung mit einer Sprachausgabe optimiert.", "Der Editor wird nie für die Verwendung mit einer Sprachausgabe optimiert. ", "Steuert, ob der Editor in einem Modus ausgeführt werden soll, in dem er für die Sprachausgabe optimiert wird.", "Steuert, ob der Editor Links erkennen und anklickbar machen soll", "Steuert, ob der Diff-Editor das Diff nebeneinander oder inline anzeigt.", "Steuert, ob der Diff-Editor Änderungen in führenden oder nachgestellten Leerzeichen als Diffs anzeigt.", 'Steuert, ob der Diff-Editor die Indikatoren "+" und "-" für hinzugefügte/entfernte Änderungen anzeigt.', "Steuert, ob die primäre Linux-Zwischenablage unterstützt werden soll."],
  "vs/editor/common/config/editorOptions": ["Der Editor ist zurzeit nicht verfügbar. Drücken Sie Alt+F1 für Optionen.", "Editor-Inhalt"],
  "vs/editor/common/controller/cursor": ["Unerwartete Ausnahme beim Ausführen des Befehls."],
  "vs/editor/common/model/textModelWithTokens": ["Fehler des Modus bei der Tokenumwandlung der Eingabe."],
  "vs/editor/common/modes/modesRegistry": ["Nur-Text"],
  "vs/editor/common/services/bulkEdit": ["Die folgenden Dateien wurden in der Zwischenzeit geändert: {0}", "Keine Änderungen vorgenommen", "{0} Änderungen am Text in {1} Dateien vorgenommen", "{0} Änderungen am Text in einer Datei vorgenommen"],
  "vs/editor/common/services/modelServiceImpl": ["[{0}]\n{1}", "[{0}] {1}"],
  "vs/editor/common/view/editorColorRegistry": ["Hintergrundfarbe zur Hervorhebung der Zeile an der Cursorposition.", "Hintergrundfarbe für den Rahmen um die Zeile an der Cursorposition.", "Hintergrundfarbe hervorgehobener Bereiche (beispielsweise durch Features wie Quick Open und Suche).", "Farbe des Cursors im Editor.", "Hintergrundfarbe vom Editor-Cursor. Erlaubt die Anpassung der Farbe von einem Zeichen, welches von einem Block-Cursor überdeckt wird.", "Farbe der Leerzeichen im Editor.", "Farbe der Führungslinien für Einzüge im Editor.", "Zeilennummernfarbe im Editor.", "Farbe des Editor-Lineals.", "Vordergrundfarbe der CodeLens-Links im Editor", "Hintergrundfarbe für zusammengehörige Klammern", "Farbe für zusammengehörige Klammern", "Farbe des Rahmens für das Übersicht-Lineal.", "Hintergrundfarbe der Editorleiste. Die Leiste enthält die Glyphenränder und die Zeilennummern.", "Vordergrundfarbe von Fehlerunterstreichungen im Editor.", "Rahmenfarbe von Fehlerunterstreichungen im Editor.", "Vordergrundfarbe von Warnungsunterstreichungen im Editor.", "Rahmenfarbe von Warnungsunterstreichungen im Editor."],
  "vs/editor/contrib/bracketMatching/common/bracketMatching": ["Gehe zu Klammer"],
  "vs/editor/contrib/caretOperations/common/caretOperations": ["Caretzeichen nach links verschieben", "Caretzeichen nach rechts verschieben"],
  "vs/editor/contrib/caretOperations/common/transpose": ["Buchstaben austauschen"],
  "vs/editor/contrib/clipboard/browser/clipboard": ["Ausschneiden", "Kopieren", "Einfügen", "Mit Syntaxhervorhebung kopieren"],
  "vs/editor/contrib/comment/common/comment": ["Zeilenkommentar umschalten", "Zeilenkommentar hinzufügen", "Zeilenkommentar entfernen", "Blockkommentar umschalten"],
  "vs/editor/contrib/contextmenu/browser/contextmenu": ["Editor-Kontextmenü anzeigen"],
  "vs/editor/contrib/find/browser/findWidget": ["Suchen", "Suchen", "Vorherige Übereinstimmung", "Nächste Übereinstimmung", "In Auswahl suchen", "Schließen", "Ersetzen", "Ersetzen", "Ersetzen", "Alle ersetzen", "Ersetzen-Modus wechseln", "Nur die ersten 999 Ergebnisse werden hervorgehoben, alle Suchvorgänge beziehen sich aber auf den gesamten Text.", "{0} von {1}", "Keine Ergebnisse"],
  "vs/editor/contrib/find/common/findController": ["Suchen", "Nächstes Element suchen", "Vorheriges Element suchen", "Nächste Auswahl suchen", "Vorherige Auswahl suchen", "Ersetzen", "Auswahl zur nächsten Übereinstimmungssuche hinzufügen", "Letzte Auswahl zu vorheriger Übereinstimmungssuche hinzufügen", "Letzte Auswahl in nächste Übereinstimmungssuche verschieben", "Letzte Auswahl in vorherige Übereinstimmungssuche verschieben", "Alle Vorkommen auswählen und Übereinstimmung suchen", "Alle Vorkommen ändern", "Nächsten Suchbegriff anzeigen", "Vorherigen Suchbegriff anzeigen"],
  "vs/editor/contrib/folding/browser/folding": ["Auffalten", "Faltung rekursiv aufheben", "Falten", "Rekursiv falten", "Alle falten", "Alle auffalten", "Faltebene {0}"],
  "vs/editor/contrib/format/browser/formatActions": ["1 Formatierung in Zeile {0} vorgenommen", "{0} Formatierungen in Zeile {1} vorgenommen", "1 Formatierung zwischen Zeilen {0} und {1} vorgenommen", "{0} Formatierungen zwischen Zeilen {1} und {2} vorgenommen", "Format Document", "Format Selection"],
  "vs/editor/contrib/goToDeclaration/browser/goToDeclarationCommands": ['Keine Definition gefunden für "{0}".', "Keine Definition gefunden", " – {0} Definitionen", "Gehe zu Definition", "Definition an der Seite öffnen", "Peek-Definition", 'Keine Implementierung gefunden für "{0}"', "Keine Implementierung gefunden", "{0} Implementierungen", "Zur Implementierung wechseln", "Vorschau der Implementierung anzeigen", 'Keine Typendefinition gefunden für "{0}"', "Keine Typendefinition gefunden", "{0} Typdefinitionen", "Zur Typdefinition wechseln", "Vorschau der Typdefinition anzeigen"],
  "vs/editor/contrib/goToDeclaration/browser/goToDeclarationMouse": ["Klicken Sie, um {0} Definitionen anzuzeigen."],
  "vs/editor/contrib/gotoError/browser/gotoError": ["({0}/{1})", "Gehe zum nächsten Fehler oder zur nächsten Warnung", "Gehe zum vorherigen Fehler oder zur vorherigen Warnung", "Editormarkierung: Farbe bei Fehler des Navigationswidgets.", "Editormarkierung: Farbe bei Warnung des Navigationswidgets.", "Editormarkierung: Hintergrund des Navigationswidgets."],
  "vs/editor/contrib/hover/browser/hover": ["Hovern anzeigen"],
  "vs/editor/contrib/hover/browser/modesContentHover": ["Wird geladen..."],
  "vs/editor/contrib/inPlaceReplace/common/inPlaceReplace": ["Durch vorherigen Wert ersetzen", "Durch nächsten Wert ersetzen"],
  "vs/editor/contrib/linesOperations/common/linesOperations": ["Zeile nach oben kopieren", "Zeile nach unten kopieren", "Zeile nach oben verschieben", "Zeile nach unten verschieben", "Zeilen aufsteigend sortieren", "Zeilen absteigend sortieren", "Nachgestelltes Leerzeichen kürzen", "Zeile löschen", "Zeileneinzug", "Zeile ausrücken", "Zeile oben einfügen", "Zeile unten einfügen", "Alle übrigen löschen", "Alle rechts löschen", "Zeilen verknüpfen", "Zeichen um den Cursor herum transponieren", "In Großbuchstaben umwandeln", "In Kleinbuchstaben umwandeln"],
  "vs/editor/contrib/links/browser/links": ["BEFEHLSTASTE + Mausklick zum Aufrufen des Links", "STRG + Mausklick zum Aufrufen des Links", "Cmd + Klick um Befehl auszuführen", "Ctrl + Klick um Befehl auszuführen.", "ALT + Mausklick zum Aufrufen des Links", "Alt + Klick um Befehl auszuführen.", "Fehler beim Öffnen dieses Links, weil er nicht wohlgeformt ist: {0}", "Fehler beim Öffnen dieses Links, weil das Ziel fehlt.", "Link öffnen"],
  "vs/editor/contrib/multicursor/common/multicursor": ["Cursor oberhalb hinzufügen", "Cursor unterhalb hinzufügen", "Cursor an Zeilenenden hinzufügen"],
  "vs/editor/contrib/parameterHints/browser/parameterHints": ["Parameterhinweise auslösen"],
  "vs/editor/contrib/parameterHints/browser/parameterHintsWidget": ["{0}, Hinweis"],
  "vs/editor/contrib/quickFix/browser/quickFixCommands": ["Korrekturen anzeigen ({0})", "Korrekturen anzeigen", "Schnelle Problembehebung"],
  "vs/editor/contrib/referenceSearch/browser/referenceSearch": [" – {0} Verweise", "Alle Verweise suchen"],
  "vs/editor/contrib/referenceSearch/browser/referencesController": ["Wird geladen..."],
  "vs/editor/contrib/referenceSearch/browser/referencesModel": ["Symbol in {0} in Zeile {1}, Spalte {2}", "1 Symbol in {0}, vollständiger Pfad {1}", "{0} Symbole in {1}, vollständiger Pfad {2}", "Es wurden keine Ergebnisse gefunden.", "1 Symbol in {0} gefunden", "{0} Symbole in {1} gefunden", "{0} Symbole in {1} Dateien gefunden"],
  "vs/editor/contrib/referenceSearch/browser/referencesWidget": ["Fehler beim Auflösen der Datei.", "{0} Verweise", "{0} Verweis", "Keine Vorschau verfügbar.", "Verweise", "Keine Ergebnisse", "Verweise", "Hintergrundfarbe des Titelbereichs der Peek-Ansicht.", "Farbe des Titels in der Peek-Ansicht.", "Farbe der Titelinformationen in der Peek-Ansicht.", "Farbe der Peek-Ansichtsränder und des Pfeils.", "Hintergrundfarbe der Ergebnisliste in der Peek-Ansicht.", "Vordergrundfarbe für Zeilenknoten in der Ergebnisliste der Peek-Ansicht.", "Vordergrundfarbe für Dateiknoten in der Ergebnisliste der Peek-Ansicht.", "Hintergrundfarbe des ausgewählten Eintrags in der Ergebnisliste der Peek-Ansicht.", "Vordergrundfarbe des ausgewählten Eintrags in der Ergebnisliste der Peek-Ansicht.", "Hintergrundfarbe des Peek-Editors.", "Hintergrundfarbe der Leiste im Peek-Editor.", "Farbe für Übereinstimmungsmarkierungen in der Ergebnisliste der Peek-Ansicht.", "Farbe für Übereinstimmungsmarkierungen im Peek-Editor."],
  "vs/editor/contrib/rename/browser/rename": ["Kein Ergebnis.", '"{0}" erfolgreich in "{1}" umbenannt. Zusammenfassung: {2}', "Fehler bei der Ausführung der Umbenennung.", "Symbol umbenennen"],
  "vs/editor/contrib/rename/browser/renameInputField": ["Benennen Sie die Eingabe um. Geben Sie einen neuen Namen ein, und drücken Sie die EINGABETASTE, um den Commit auszuführen."],
  "vs/editor/contrib/smartSelect/common/smartSelect": ["Auswahl erweitern", "Auswahl verkleinern"],
  "vs/editor/contrib/suggest/browser/suggestController": ['Durch Annahme von "{0}" wurde folgender Text eingefügt: {1}', "Vorschlag auslösen"],
  "vs/editor/contrib/suggest/browser/suggestWidget": ["Hintergrundfarbe des Vorschlagswidgets.", "Rahmenfarbe des Vorschlagswidgets.", "Vordergrundfarbe des Vorschlagswidgets.", "Hintergrundfarbe des ausgewählten Eintrags im Vorschlagswidget.", "Farbe der Trefferhervorhebung im Vorschlagswidget.", "Mehr anzeigen...{0}", "{0}, Vorschlag, hat Details", "{0}, Vorschlag", "Weniger anzeigen...{0}", "Wird geladen...", "Keine Vorschläge.", "{0}, angenommen", "{0}, Vorschlag, hat Details", "{0}, Vorschlag"],
  "vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode": ["TAB-Umschalttaste verschiebt Fokus"],
  "vs/editor/contrib/wordHighlighter/common/wordHighlighter": ["Hintergrundfarbe eines Symbols beim Lesezugriff (beispielsweise beim Lesen einer Variablen).", "Hintergrundfarbe eines Symbols beim Schreibzugriff (beispielsweise beim Schreiben in eine Variable)."],
  "vs/editor/contrib/zoneWidget/browser/peekViewWidget": ["Schließen"],
  "vs/editor/standalone/browser/inspectTokens/inspectTokens": ["Developer: Inspect Tokens"],
  "vs/editor/standalone/browser/quickOpen/gotoLine": ["Go to line {0} and character {1}", "Go to line {0}", "Type a line number between 1 and {0} to navigate to", "Type a character between 1 and {0} to navigate to", "Go to line {0}", "Type a line number, followed by an optional colon and a character number to navigate to", "Go to Line..."],
  "vs/editor/standalone/browser/quickOpen/quickCommand": ["{0}, commands", "Type the name of an action you want to execute", "Command Palette"],
  "vs/editor/standalone/browser/quickOpen/quickOutline": ["{0}, symbols", "Type the name of an identifier you wish to navigate to", "Go to Symbol...", "symbols ({0})", "modules ({0})", "classes ({0})", "interfaces ({0})", "methods ({0})", "functions ({0})", "properties ({0})", "variables ({0})", "variables ({0})", "constructors ({0})", "calls ({0})"],
  "vs/editor/standalone/browser/standaloneCodeEditor": ["Editor content", "Press Ctrl+F1 for Accessibility Options.", "Press Alt+F1 for Accessibility Options."],
  "vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast": ["Toggle High Contrast Theme"],
  "vs/platform/configuration/common/configurationRegistry": ["Standard-Konfiguration überschreibt", "Zu überschreibende Einstellungen für Sprache {0} konfigurieren.", "Zu überschreibende Editor-Einstellungen für eine Sprache konfigurieren.", '"{0}" kann nicht registriert werden. Die Eigenschaft stimmt mit dem Eigenschaftsmuster \'\\\\[.*\\\\]$\' zum Beschreiben sprachspezifischer Editor-Einstellungen überein. Verwenden Sie den Beitrag "configurationDefaults".', '"{0}" kann nicht registriert werden. Diese Eigenschaft ist bereits registriert.'],
  "vs/platform/keybinding/common/abstractKeybindingService": ["({0}) wurde gedrückt. Es wird auf die zweite Taste der Kombination gewartet...", "Die Tastenkombination ({0}, {1}) ist kein Befehl."],
  "vs/platform/message/common/message": ["Schließen", "Später", "Abbrechen"],
  "vs/platform/theme/common/colorRegistry": ["Ungültiges Farbformat. Verwenden Sie #RGB, #RGBA, #RRGGBB oder #RRGGBBAA.", "In der Workbench verwendete Farben.", "Allgemeine Vordergrundfarbe. Diese Farbe wird nur verwendet, wenn sie nicht durch eine Komponente überschrieben wird.", "Allgemeine Vordergrundfarbe. Diese Farbe wird nur verwendet, wenn sie nicht durch eine Komponente überschrieben wird.", "Vordergrundfarbe für Beschreibungstexte, die weitere Informationen anzeigen, z. B. für ein Label.", "Allgemeine Rahmenfarbe für fokussierte Elemente. Diese Farbe wird nur verwendet, wenn sie nicht durch eine Komponente überschrieben wird.", "Ein zusätzlicher Rahmen um Elemente, mit dem diese von anderen getrennt werden, um einen größeren Kontrast zu erreichen.", "Ein zusätzlicher Rahmen um aktive Elemente, mit dem diese von anderen getrennt werden, um einen größeren Kontrast zu erreichen.", "Hintergrundfarbe der Textauswahl in der Workbench (z. B. für Eingabefelder oder Textbereiche). Diese Farbe gilt nicht für die Auswahl im Editor. ", "Farbe für Text-Trennzeichen.", "Vordergrundfarbe für Links im Text.", "Vordergrundfarbe für aktive Links im Text.", "Vordergrundfarbe für vorformatierte Textsegmente.", "Hintergrundfarbe für block quotes im Text.", "Rahmenfarbe für block quotes im Text.", "Hintergrundfarbe für Code-Blöcke im Text.", "Schattenfarbe von Widgets wie zum Beispiel Suchen/Ersetzen innerhalb des Editors.", "Hintergrund für Eingabefeld.", "Vordergrund für Eingabefeld.", "Rahmen für Eingabefeld.", "Rahmenfarbe für aktivierte Optionen in Eingabefeldern.", "Input box - Vordergrundfarbe für Platzhalter-Text.", "Hintergrundfarbe bei der Eingabevalidierung für den Schweregrad der Information.", "Rahmenfarbe bei der Eingabevalidierung für den Schweregrad der Information.", "Hintergrundfarbe bei der Eingabevalidierung für eine Warnung zur Information.", "Rahmenfarbe bei der Eingabevalidierung für den Schweregrad der Warnung.", "Hintergrundfarbe bei der Eingabevalidierung für den Schweregrad des Fehlers.", "Rahmenfarbe bei der Eingabevalidierung für den Schweregrad des Fehlers.", "Hintergrund für Dropdown.", "Vordergrund für Dropdown.", "Rahmen für Dropdown.", "Hintergrundfarbe der Liste/Struktur für das fokussierte Element, wenn die Liste/Struktur aktiv ist. Eine aktive Liste/Struktur hat Tastaturfokus, eine inaktive hingegen nicht.", "Vordergrundfarbe der Liste/Struktur für das fokussierte Element, wenn die Liste/Struktur aktiv ist. Eine aktive Liste/Struktur hat Tastaturfokus, eine inaktive hingegen nicht.", "Hintergrundfarbe der Liste/Struktur für das ausgewählte Element, wenn die Liste/Struktur aktiv ist. Eine aktive Liste/Struktur hat Tastaturfokus, eine inaktive hingegen nicht.", "Vordergrundfarbe der Liste/Struktur für das ausgewählte Element, wenn die Liste/Struktur aktiv ist. Eine aktive Liste/Struktur hat Tastaturfokus, eine inaktive hingegen nicht.", "Hintergrundfarbe der Liste/Struktur für das ausgewählte Element, wenn die Liste/Struktur inaktiv ist. Eine aktive Liste/Struktur hat Tastaturfokus, eine inaktive hingegen nicht.", "Liste/Baumstruktur - Vordergrundfarbe für das ausgewählte Element, wenn die Liste/Baumstruktur inaktiv ist. Eine aktive Liste/Baumstruktur hat Tastaturfokus, eine inaktive hingegen nicht.", "Hintergrundfarbe der Liste/Struktur für das ausgewählte Element, wenn die Liste/Struktur inaktiv ist. Eine aktive Liste/Struktur hat Tastaturfokus, eine inaktive hingegen nicht.", "Liste/Baumstruktur - Vordergrundfarbe für das ausgewählte Element, wenn die Liste/Baumstruktur inaktiv ist. Eine aktive Liste/Baumstruktur hat Tastaturfokus, eine inaktive hingegen nicht.", "Hintergrund der Liste/Struktur, wenn mit der Maus auf Elemente gezeigt wird.", "Vordergrund der Liste/Struktur, wenn mit der Maus auf Elemente gezeigt wird.", "Drag & Drop-Hintergrund der Liste/Struktur, wenn Elemente mithilfe der Maus verschoben werden.", "Vordergrundfarbe der Liste/Struktur zur Trefferhervorhebung beim Suchen innerhalb der Liste/Struktur.", "Schnellauswahlfarbe für das Gruppieren von Bezeichnungen.", "Schnellauswahlfarbe für das Gruppieren von Rahmen.", "Vordergrundfarbe der Schaltfläche.", "Hintergrundfarbe der Schaltfläche.", "Hintergrundfarbe der Schaltfläche, wenn darauf gezeigt wird.", "Badge - Hintergrundfarbe. Badges sind kurze Info-Texte, z. B. für Anzahl Suchergebnisse.", "Badge - Vordergrundfarbe. Badges sind kurze Info-Texte, z. B. für Anzahl Suchergebnisse.", "Schatten der Scrollleiste, um anzuzeigen, dass die Ansicht gescrollt wird.", "Hintergrundfarbe vom Scrollbar-Schieber", "Hintergrundfarbe des Schiebereglers, wenn darauf gezeigt wird.", "Hintergrundfarbe des Schiebereglers, wenn dieser aktiv ist.", "Hintergrundfarbe des Fortschrittbalkens, der für lang ausgeführte Vorgänge angezeigt werden kann.", "Hintergrundfarbe des Editors.", "Standardvordergrundfarbe des Editors.", "Hintergrundfarbe von Editor-Widgets wie zum Beispiel Suchen/Ersetzen.", "Rahmenfarbe von Editorwigdets. Die Farbe wird nur verwendet, wenn für das Widget ein Rahmen verwendet wird und die Farbe nicht von einem Widget überschrieben wird.", "Farbe der Editor-Auswahl.", "Farbe des gewählten Text für einen hohen Kontrast", "Farbe der Auswahl in einem inaktiven Editor.", "Farbe für Bereiche, deren Inhalt der Auswahl entspricht.", "Farbe des aktuellen Suchergebnisses.", "Farbe der anderen Suchtreffer.", "Farbe des Bereichs zur Einschränkung der Suche.", "Hervorhebung eines Worts, unter dem ein Mauszeiger angezeigt wird.", "Background color of the editor hover.", "Rahmenfarbe des Editor-Mauszeigers.", "Farbe der aktiven Links.", "Hintergrundfarbe für eingefügten Text.", "Hintergrundfarbe für entfernten Text.", "Konturfarbe für eingefügten Text.", "Konturfarbe für entfernten Text.", "Aktueller Kopfzeilenhintergrund in Inline-Mergingkonflikten.", "Aktueller Inhaltshintergrund in Inline-Mergingkonflikten.", "Eingehender Kopfzeilenhintergrund in Inline-Mergingkonflikten. ", "Eingehender Inhaltshintergrund in Inline-Mergingkonflikten.", "Kopfzeilenhintergrund des gemeinsamen übergeordneten Elements bei Inlinezusammenführungskonflikten. ", "Inhaltshintergrund des gemeinsamen übergeordneten Elements bei Inlinezusammenführungskonflikten.", "Rahmenfarbe für Kopfzeilen und die Aufteilung in Inline-Mergingkonflikten.", "Aktueller Übersichtslineal-Vordergrund für Inline-Mergingkonflikte.", "Eingehender Übersichtslineal-Vordergrund für Inline-Mergingkonflikte. ", "Hintergrund des Übersichtslineals des gemeinsamen übergeordneten Elements bei Inlinezusammenführungskonflikten."]
});
//# sourceMappingURL=../../../min-maps/vs/editor/editor.main.nls.de.js.map
