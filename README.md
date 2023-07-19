Task:
There is a table which consists of
- Header lines
- 7 rows
- 5 columns
- The first column has no numeric values (can be pa)
- Column 2-3 has only integer type numbers
- Column 4-5 has only float type numbers
- Lines 5-6 have numerical values that never change and can be marked with some kind of pastel background
- Line 7 is used as the Summary line
- Style: alternating-line for data field, some style for header and summary lines

Under the table there are 2 buttons: Reload , Automatic reload

After pressing the Reload button:
- When using javascript, the numeric values of columns 1-4 should change after clicking (random)
- A recalculation takes place by including 5-6 rows
- The Summary line performs recalculations based on the content of lines 1-6

After pressing the Auto Reload button:
- Does the same thing as the reload button, but automatically refreshes every 10 seconds
- Pressing the Reload button stops the automatic reload
