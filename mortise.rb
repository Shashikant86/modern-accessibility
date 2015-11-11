require "mortise"
puts "Now Checking the Accessibility of the BBC website "
API_KEY = ""
checker = Mortise.check("http://www.bbc.co.uk", API_KEY)
issue = checker.issues.first
puts issue.error_description
