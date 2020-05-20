require 'webrick'
port = 8000

puts "Visit at: http://localhost:#{port}"

WEBrick::HTTPServer.new(
    Port: port, 
    DocumentRoot: "#{Dir.pwd}",
    BindAddress: '0.0.0.0'
).start

