concommand.Add( "metrostroi_signal_import_url", function(ply, command, args)
	if IsValid(ply) then
		if ULib then
			if not ULib.ucl.query( ply, "editsignals", true ) then return end
		else
			if (ply:IsValid()) and (not ply:IsAdmin()) then return end
		end
	end
    
    http.Fetch( args[1], function(body)
        file.Write("metrostroi_data/calc/tempsigimport.json", body)
		
		local status, result = pcall(function()
			importSignalData("tempsigimport.json", tonumber(args[2]))
		end)

		if not status then
			RunConsoleCommand('say', "Import signals failed ... "..result)
		else
			RunConsoleCommand('say', "Import signals success!")
		end
        
    end, 
    function()
        RunConsoleCommand('say', "Import signals faild")
    end)
    
end )