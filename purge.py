#!/usr/bin/env python3

# Grabs the profiles of people that
# didn't join the team or retire
# That are older than 30 days since
# they posted their profile

interns1 = './pages/vi/vi-team.md'
interns2 = './pages/vi/vi-former-members.md'
profiles = './pages/vi/profiles/'

import os, re, time, subprocess
from operator import sub

def grabprofiles(path):
	pages = os.listdir(path)
	return [os.path.splitext(x)[0] for x in pages]
	
def grabinterns(path):
	lst = [re.findall(r"^.*\[(.*)\].*$",line)
		for line in open(path)]
	lst[:] = [x for x in lst if x]
	return lst
	
def main():
	""" Main entry point of the app """
	lst = grabinterns(interns1) + grabinterns(interns2)
	lst = [val for sublist in lst for val in sublist]
	lst2 = grabprofiles(profiles)
	lst = [item.lower() for item in lst]
	lst2 = [item.lower() for item in lst2]
	lst3 = [item for item in lst2 if item not in lst]

	now = time.time()
	for filename in lst3:		
		t1 = subprocess.check_output(['git','log','-1','--format="%at"','--', profiles + filename + ".md"]).decode("utf-8") 
		t1 = t1[t1.find("\"") + 1:t1.find("\"", t1.find("\"") + 1)]
		if not (t1 and t1.strip()):
			continue
		if os.path.exists(profiles + filename + ".md"):
			if (now - int(t1)) > 2592000:
				print("File removed: " + profiles + filename + ".md")
				command = "sudo rm {0}".format(profiles + filename + ".md")
				subprocess.call(command, shell=True)
	
	
if __name__ == "__main__":
	""" This is executed when run from the command line """
	main()
