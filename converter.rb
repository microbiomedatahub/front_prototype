#!/usr/bin/env ruby

require 'csv'
require 'json'

puts "#####################################################"
puts "# Hello SIP converter                               #"
puts "# This program is convert tsv file to jsonld format #"
puts "# for elasticsearch bulk insert                     #"
puts "#####################################################"

def check_args
  file = ARGV[0]

  if file.nil? 
    puts "Usage: ./converter.rb [FILE]"
    exit 1
  end

  unless File.exist?(file)
    puts "[ERROR] Can't read file. File path = #{file}"
    exit 1
  end
end

# main
check_args
file = ARGV[0]
ary = Array.new

CSV.foreach(file, col_sep: "\t", headers: true).with_index do |line, i|
  index_hash = Hash.new
  root_hash = Hash.new
  root_hash["_index"]   = "sip_facet_public"
  root_hash["_type"]    = "sip_facet"
  
  # 0: sample_id
  # 1: HostBMI
  # 2: sex
  # 3: location
  # 4: HostAge
  # 5: healthy
  # 6: AntibioticRegimen
  # 7: feces_type
  # 8: MEO            検索不要
  # 9: host_taxonomy  検索不要
  # 10: HostEhnicity  検索不要
  # 11: taxonomy      検索不要
  
  root_hash["_id"] = line[0]
  index_hash["index"] = root_hash

  attr = Hash.new
  attr["id"] = line[0]
  attr["identifier"] = line[0]
  attr["dateCreated"] = Time.now.strftime("%FT%R")
  attr["dateModified"] = Time.now.strftime("%FT%R")
  attr["datePublished"] =  Time.now.strftime("%FT%R")
  attr["name"] = line[0]
  attr["title"] = "SIP sample"
  attr["description"] = ""
  attr["package"] = "SIP.1.0"
  attr["organism"] = {
        "name": "SIP",
        "identifier": line[0]
  }
  attr["HostBMI"] = line[1]
  attr["sex"]     = line[2]
  attr["location"] = line[3]
  attr["HostAge"] = line[4]
  attr["healthy"] = line[5]
  attr["AntibioticRegimen"] = line[6]
  attr["feces_type"] = line[7]
  attr["MEO"] = line[8]
  attr["host_taxonomy"] = line[9]
  attr["HostEhnicity"] = line[10]
  attr["taxonomy"] = line[11] 
  
  #root_hash["_source"] = attr

  source_hash = Hash.new
  source_hash["_source"] = attr

  ary << index_hash
  ary << attr
end

file_name = "sip_sample.json"

if File.exist?(file_name) then
   File.delete(file_name)
end

ary.each do |element|
  json_str = JSON.generate(element)
  
  File.open(file_name,"a") {|file|
    file.puts(json_str)
  }
end

puts "## Done! ##"

